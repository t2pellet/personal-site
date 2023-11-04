import createMiddleware from 'next-intl/middleware';
import { languages } from '@/types';

export default createMiddleware({
  locales: languages,
  defaultLocale: 'en',
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
