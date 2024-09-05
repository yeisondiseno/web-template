import { NextResponse, NextRequest } from 'next/server';
// Types
import { HomeFormInputTypes } from '@modules/homeModule/types';

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

  return NextResponse.json({ message: 'Llamado exitoso' });
}
