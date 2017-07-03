import React from 'react';
import './OpeningCrawl.css'

const OpeningCrawl = ({ opening }) => {

  return (
    <div className="opening-crawl">
      <div className="crawl-text">
        <h1 className="movie-title">
          A New Hope
        </h1>
        <h4 className="release-year">
          (1977)
        </h4>
        <p>
          { opening }
        </p>
      </div>
    </div>
  )
}

export default OpeningCrawl;
