import React from 'react';
import './FavoritesViewer.css'

const FavoritesViewer = ({ favorites }) => {
  return (
    <div className='favorites-viewer-container'>
      <h5>
        Starred Items
      </h5>
      <p>{ favorites }</p>
    </div>
  )
}

export default FavoritesViewer
