import { NextResponse } from 'next/server';

export function GET() {
  console.log('entró');
  return new NextResponse('OK');
}
