import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const roboto = localFont({
  src: [
    {
      path: './fonts/Roboto-Thin.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-ThinItalic.woff',
      weight: '100',
      style: 'italic',
    },
    {
      path: './fonts/Roboto-Light.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-LightItalic.woff',
      weight: '300',
      style: 'italic',
    },
    {
      path: './fonts/Roboto-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-Regular.woff',
      weight: '400',
      style: 'italic',
    },
    {
      path: './fonts/Roboto-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-MediumItalic.woff',
      weight: '500',
      style: 'italic',
    },
    {
      path: './fonts/Roboto-Bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-BoldItalic.woff',
      weight: '700',
      style: 'italic',
    },
    {
      path: './fonts/Roboto-Black.woff',
      weight: '900',
      style: 'normal',
    },
    {
      path: './fonts/Roboto-BlackItalic.woff',
      weight: '900',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Попутчики',
  description: 'Поиск попутчиков для путешествий',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ru'
      className='max-h-full'
    >
      <body className={`${roboto.className} max-h-full`}>{children}</body>
    </html>
  );
}
