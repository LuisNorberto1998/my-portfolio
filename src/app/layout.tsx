import * as React from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className='main-container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
