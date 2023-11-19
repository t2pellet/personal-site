import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const token = request.headers.get('Authorization')?.substring(7);
  if (token === process.env.STRAPI_HOOK_TOKEN) {
    revalidateTag('strapi');
    return Response.json({ revalidated: true });
  }
  return Response.error();
}
