import React from 'react';
import            './FilmDisplay.css';

const FilmDisplay = ({ displayCards, starItem }) => {
  const sorted = displayCards.sort( (filmA, filmB) => filmA.episode_id > filmB.episode_id)

  const eachCard = sorted.map( i => {
    let favIcon = i.favorite ? '💩' : '🎃'
    return (
      <article  key={ i.episode_id }
                className='film-card'>
        <div className="card-header">
          <h1>Star Wars: Episode { i.episode_id }</h1>
          <span value={ i }
                onClick={ () => { starItem(i, 'films') } }
                className="fav-btn"
                role='img'
                aria-labelledby='add to favorites'>{ favIcon }</span>
        </div>
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
