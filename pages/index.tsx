import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout title='Home | Benjamin Wu'>
      <div className='text-8xl text-emerald-900'><strong>Hello World!</strong></div>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
