import { Geist_Mono, Vazirmatn } from 'next/font/google';

export const sans = Vazirmatn({
  variable: '--font-vazir-matn',
  subsets: ['latin', 'arabic'],
  adjustFontFallback: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
});

export const mono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  adjustFontFallback: true,
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
  display: 'swap',
});
