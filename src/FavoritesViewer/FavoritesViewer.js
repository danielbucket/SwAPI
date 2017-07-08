import React from 'react';
import { Link } from 'react-router-dom';
import            './FavoritesViewer.css';

const FavoritesViewer = ({ favoriteCount }) => {
  return (
    <div className='favorites-viewer-container'>
      <Link to='/'>
        <button className="all-favs-button">
          <span className="fav-count-label">Starred Items: </span><span className="fav-count">{ favoriteCount }</span>
        </button>
      </Link>
    </div>
  )
}

export default FavoritesViewer;
