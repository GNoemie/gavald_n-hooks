import React from 'react';
import FavouriteToggle from './FavouriteToggle';
import { useState } from 'react';

const Post = ({ data }) => {
  const [body, setBody] = useState('');
  return (
  <li
    style={{
      backgroundColor: 'white',
      color: '#333',
      margin: '5px',
      padding: '10px',
      fontSize: '11pt',
      cursor: 'pointer'
    }}
    
  >
    <span 
      style={{ fontWeight: '900' }} 
      onClick={() => {
        if (body === '')
          setBody(data.body)
        else
          setBody('')
    }}>{data.title}</span>
    <FavouriteToggle style={{ float: 'right' }} />
    <div style={{ fontWeight: '900' }}>{body}</div>     

    
  </li>
  )
};

export default Post;
