'use server';

import { Language } from '@/types';

const STRAPI_TOKEN = process.env.STRAPI_TOKEN as string;
const STRAPI_URL = process.env.STRAPI_URL as string;

export default async function getData(path: string, lang: Language = 'en') {
  const fetchStr = `${STRAPI_URL}/${path}?populate=*&filters[locale='${lang}']`;
  const result = await fetch(fetchStr, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });
  if (!result.ok) {
    throw new Error('Failed to get data for path: ' + path);
  }

  return result.json();
}
