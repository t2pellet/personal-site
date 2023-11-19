'use server';

import { Language } from '@/types';

const STRAPI_TOKEN = process.env.STRAPI_TOKEN as string;
const STRAPI_URL = process.env.STRAPI_URL as string;

export default async function getData(
  path: string,
  lang: Language = 'en',
  populate: '*' | 'deep' | `deep,${number}` = '*',
  filterStr?: string
) {
  const fetchStr = `${STRAPI_URL}/${path}?populate=${populate}&locale=${lang}${
    filterStr ? `&filters${filterStr}` : ''
  }`;
  const result = await fetch(fetchStr, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    next: {
      revalidate: 1800,
    },
  });
  if (!result.ok) {
    throw new Error('Failed to get data for path: ' + path);
  }

  return result.json();
}
