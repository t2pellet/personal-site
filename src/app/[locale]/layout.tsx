import React from 'react';
import '../globals.scss';
import NavBar from '@/components/nav/bar/NavBar';
import Script from 'next/script';
import Particles from '@/components/Particles';
import { Language, languages } from '@/types';
import { notFound } from 'next/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import { polyfill } from 'interweave-ssr';

export async function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

// To support SSR with Interweave
polyfill();
export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Language };
}) {
  const isValidLocale = languages.some((cur) => cur === locale);
  if (!isValidLocale) notFound();

  unstable_setRequestLocale(locale);
  return (
    <html
      lang={locale}
      data-theme='dracula'
      className='w-full overflow-x-hidden'
    >
      <Script id='hash-change' src='js/hashchange.js' />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
      <body>
        <Particles />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
