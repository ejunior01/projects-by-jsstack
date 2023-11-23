import React from 'react';

import Header from '../Header';
import Footer from '../Footer';
import PostsList from '../PostList';

export default function Layout() {
  return (
    <>
      <Header />
      <PostsList />
      <Footer />
    </>
  );
}
