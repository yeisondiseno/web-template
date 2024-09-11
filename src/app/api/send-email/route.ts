import { NextResponse, NextRequest } from 'next/server';
// Libraries
import nodemailer from 'nodemailer';
// Config
import { env } from '@config/env';
// Types
import { HomeFormInputTypes } from '@modules/homeModule/types';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: true,
  auth: {
    user: env.emailUserName,
    pass: env.emailPassword,
  },
});

export async function POST(req: NextRequest, res: NextResponse) {
  const getRequest = await req.json();
  const data: HomeFormInputTypes = JSON.parse(getRequest?.body);
  console.log('data: ', data);

  if (!data)
    return NextResponse.json(
      { error: 'No se han enviado datos' },
      { status: 400 },
    );

  if (!data.email || !data.name || !data.phone)
    return NextResponse.json(
      { error: 'Uno o más datos son incorrectos o no existen' },
      { status: 403 },
    );

  const { email, name, phone } = data;
  try {
    await transporter.sendMail({
      from: '"Message bot"<your@gmail.com>',
      to: env.emailUserName,
      subject: `Registro de boletin`,
      text: `Registrar usuario ${name} con correo ${email} y teléfono ${phone}`,
    });

    return NextResponse.json({
      status: 200,
      message: 'Correo registrado con éxito.',
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ status: 500 });
  }
}
