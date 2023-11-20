import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // defaults to force-static

export async function POST(req: NextRequest) {
  const token = req.headers.get('x-authorization')?.substring(7);
  if (token === process.env.STRAPI_HOOK_TOKEN) {
    revalidateTag('strapi');
    return Response.json({ revalidated: true }, { status: 200 });
  }
  return new NextResponse('Invalid strapi token', { status: 403 });
}
