import { ReactNode } from 'react';
import type { Metadata } from 'next';
// Config
import { env } from '@config/env';
// Fonts
import { Roboto } from 'next/font/google';
// Styles
import '@styles/index.scss';

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'Web-UI-template',
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
      <body className={roboto.className}>
        {children}
        <div id='portal' />
      </body>
    </html>
  );
}
