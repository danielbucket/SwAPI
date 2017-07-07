import React from 'react';
import            './FavoritesViewer.css';

const FavoritesViewer = ({ favoriteCount }) => {
  return (
    <div className='favorites-viewer-container'>
      <p>Starred Items: <span className="fav-count">{ favoriteCount }</span></p>
    </div>
  )
}

export default FavoritesViewer;
