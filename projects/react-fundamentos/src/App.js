import React from 'react';
import Header from './components/Header';
import Post from './components/Post';

export default function App() {
  return (
    <>
      <Header>
        <h2>Subitle blog react</h2>
      </Header>
      <Post
        likes={25}
        post={{
          title: 'Post 01',
          subtitle: 'Post 02',
        }}
      />
    </>
  );
}
