'use client';

import React, { useCallback } from 'react';
import classNames from 'classnames';
import { Language } from '@/types';
import { useRouter } from 'next-intl/client';
import { NextIntlClientProvider } from 'next-intl';

function RawLanguageToggle({ lang }: { lang: Language }) {
  const router = useRouter();
  const isOn = lang == 'en';

  const fullClasses = (className: string, on: boolean) => {
    return classNames(className, 'pointer-events-none absolute top-1', {
      ['hidden']: on ? isOn : !isOn,
    });
  };

  const onClick = useCallback(() => {
    const newLang = lang == 'en' ? 'fr' : 'en';
    router.replace('/', { locale: newLang });
  }, [lang, router]);

  return (
    <div className='relative flex h-fit'>
      <input
        type='checkbox'
        className='toggle'
        onChange={onClick}
        checked={isOn}
      />
      <span className={fullClasses('left-1.5 text-xs font-bold', false)}>
        FR
      </span>
      <span className={fullClasses('right-1.5 text-xs font-bold', true)}>
        EN
      </span>
    </div>
  );
}

export default function LanguageToggle({ lang }: { lang: Language }) {
  return (
    <NextIntlClientProvider locale={lang}>
      <RawLanguageToggle lang={lang} />
    </NextIntlClientProvider>
  );
}
