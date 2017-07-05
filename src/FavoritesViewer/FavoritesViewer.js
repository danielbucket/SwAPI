import React from 'react';
import './FavoritesViewer.css'

const FavoritesViewer = ({ favoritesCount }) => {
  return (
    <div className='favorites-viewer-container'>
      <p>Starred Items: <span className="fav-count">{ favoritesCount }</span></p>
    </div>
  )
}

export default FavoritesViewer
