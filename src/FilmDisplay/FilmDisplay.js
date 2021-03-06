import React from 'react';
import            './FilmDisplay.css';

const FilmDisplay = ({ displayCards, starItem }) => {
  const sorted = displayCards.sort( (filmA, filmB) => filmA.episode_id > filmB.episode_id)

  const eachCard = sorted.map( i => {
    let favIcon = i.favorite ? '💩' : '🎃'
    return (
      <article  key={ i.episode_id }
                className='film-card'>
        <header className="card-header">
          <h1 className='episode-preface'>
            Star Wars: Episode
            <span className='episode-number'>
              { i.episode_id }
            </span>
          </h1>
          <span value={ i }
              // value does not need to exist
                onClick={ () => { starItem(i, 'films') } }
                className="fav-btn"
                role='img'
                aria-labelledby='add to favorites'>{ favIcon }</span>
        </header>
        <h3> { i.title } </h3>
        <p>Release Date: { i.release_date }</p>
      </article>
    )
  })

  return (
    <div className='film-component'>
      <h1>FILMS</h1>
      <div className="film-display">
        { eachCard }
      </div>
    </div>
  )
}

export default FilmDisplay;
