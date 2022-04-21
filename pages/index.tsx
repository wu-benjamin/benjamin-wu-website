import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <Layout title='Home | Benjamin Wu'>
      <div className='text-8xl text-white'><strong>Hello World!</strong></div>
      <img src='/ProfilePic.png' alt='hot-pic' className='my-4 object-cover rounded-2xl w-96' />
      <img src='/ThonkProfilePic.png' alt='hotter-pic' className='my-4 object-cover rounded-2xl w-96' />
    </Layout>
  );
};

export default IndexPage;
