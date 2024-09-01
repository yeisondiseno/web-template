import { ReactNode } from 'react';
import type { Metadata } from 'next';
// Config
import { env } from '@config/env';
// Fonts
import { Poppins } from 'next/font/google';
// Styles
import '@styles/index.scss';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Alma Fitness',
  robots: env.envMode === 'develop' ? 'noindex, nofollow' : '',
  creator: 'Yeison Montoya',
  authors: [{ name: ' Yeison Montoya' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={poppins.className}>
        {children}
        <div id='portal' />
      </body>
    </html>
  );
}
