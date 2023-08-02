import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/infrastructure/components/Header/Hearder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Photo album application',
  description: 'Technical assessment',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="modal" />
        <Header />
        {children}
      </body>
    </html>
  );
}
