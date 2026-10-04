import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.redirect('https://manage.sanity.io/projects/srwzmn26/content', 307);
}
