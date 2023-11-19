import { Language } from '@/types';

export default function toDateStr(dateStr: string, lang: Language) {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang, {
    month: 'short',
    year: 'numeric',
  });
}
