import React from 'react';
import './OpeningCrawl.css'

const OpeningCrawl = ({ filmData }) => {

  if (filmData) {
    console.log(filmData);
  }

  return (
    <div className="opening-crawl">
      <div className="crawl-text">
        <h1 className="movie-title">
          { filmData.title }
        </h1>
        <h4 className="release-year">
          ({ filmData.release_date })
        </h4>
        <p>
          { filmData.opening_crawl }
        </p>
      </div>
    </div>
  )
}

export default OpeningCrawl;
