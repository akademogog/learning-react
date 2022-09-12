import React, { useState } from 'react';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Javascript - язык программирования'},
    {id: 2, title: 'Javascript 2', body: 'Javascript - язык программирования'},
    {id: 3, title: 'Javascript 3', body: 'Javascript - язык программирования'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python 1', body: 'Python - язык программирования'},
    {id: 2, title: 'Python 2', body: 'Python - язык программирования'},
    {id: 3, title: 'Python 3', body: 'Python - язык программирования'}
  ])

  return (
    <div className="App">
      <PostList posts={posts} title='Посты про JS'/>
      <PostList posts={posts2} title='Посты про Python'/>
    </div>
  );
}

export default App;
