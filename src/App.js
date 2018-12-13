import React from 'react';
import './App.css';
import PostsList from './components/PostsList';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then(
      res => {
      return res.json()}).then(
        resp => {
        setPosts(resp);
    })
  })

  

  return (
    <div>
      <header className="App-header">
        <PostsList posts={posts} />
      </header>
    </div>
  );
};

export default App;
