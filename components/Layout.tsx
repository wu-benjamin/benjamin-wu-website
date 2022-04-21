import React, { ReactNode } from 'react';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

type Props = {
  children?: ReactNode
  title: string
}

const Layout = ({ children, title }: Props) => {
  return (
    <div className='bg-teal-500'>
      <div className='page-wrapper'>
        <div className='page-body'>
          <Head>
            <title>{title}</title>
            <link rel="icon" type="image/x-icon" href="/ProfilePic.png" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Nav />
          <hr className='border border-teal-600 mx-4 my-2'/>
          <div className='max-w-6xl mx-auto px-8 w-full'>
            {children}
          </div>
        </div>
        <div className='bg-sky-700'>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
