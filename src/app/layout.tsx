import React from 'react';
import './globals.css';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from '@/context/ThemeContext';
import Script from 'next/script';
import Particles from '@/components/Particles';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='dracula'>
      <Script src='js/hashchange.js' />
      <body>
        <Particles />
        <NavBar />
        {children}
      </body>
    </html>
  );
}
