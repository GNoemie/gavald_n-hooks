import React from 'react';
import { useState } from 'react';

const FavouriteToggle = ({ isActive = false, style = {} }) => {
  const [fav, setFav] = useState(isActive);
  return (
    <span onClick={() => setFav(!fav)} style={style}>{fav ? '♥️' : '♡'}</span>
  )
};

export default FavouriteToggle;
