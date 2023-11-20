import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const token = request.headers.get('Authorization')?.substring(7);
  if (token === process.env.STRAPI_HOOK_TOKEN) {
    revalidateTag('strapi');
    return Response.json({ revalidated: true }, { status: 200 });
  }
  return new NextResponse('Invalid strapi token', { status: 403 });
}
