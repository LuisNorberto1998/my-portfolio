import * as React from 'react';

import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

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
        <ToastContainer />
        <Footer />
      </body>
    </html>
  );
}
