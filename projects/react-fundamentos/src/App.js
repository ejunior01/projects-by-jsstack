import React, { useState } from 'react';
import Header from './components/Header';
import Post from './components/Post';
import ThemeProvider from './context/ThemeProvider';
import Button from './components/Button';

export default function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Title#01',
      subtitle: 'Subtitle#01',
      likes: 10,
      read: true,
      remove: false,
    },
    {
      id: Math.random(),
      title: 'Title#02',
      subtitle: 'Subtitle#02',
      likes: 50,
      read: false,
      remove: false,
    },
    {
      id: Math.random(),
      title: 'Title#03',
      subtitle: 'Subtitle#03',
      likes: 30,
      read: true,
      remove: false,
    },
    {
      id: Math.random(),
      title: 'Title#04',
      subtitle: 'Subtitle#04',
      likes: 10,
      read: false,
      remove: false,
    },
  ]);

  function handleAddPost() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title 0${prevState.length + 1}`,
        subtitle: `Subtitle 0${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 100),
      },
    ]);
  }
  /* eslint max-len: ["error", { "code": 110 }] */
  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.map((post) => (post.id === postId ? { ...post, remove: true } : post)));
  }

  return (
    <ThemeProvider>
      <Header>
        <strong>Post da semana</strong>
        <Button onClick={handleAddPost}>Atualizar</Button>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          onRemove={handleRemovePost}
          post={{
            id: post.id,
            title: post.title,
            subtitle: post.subtitle,
            read: post.read,
            remove: post.remove,
          }}
        />
      ))}
    </ThemeProvider>
  );
}
