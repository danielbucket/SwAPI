import React from 'react';
import './FavoritesViewer.css'

const FavoritesViewer = ({ favorites }) => {
  return (
    <div className='favorites-viewer-container'>
      <p>Starred Items: <span className="fav-count">{ favorites }</span></p>
    </div>
  )
}

export default FavoritesViewer
