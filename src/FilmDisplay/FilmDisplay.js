import React from 'react';
import './FilmDisplay.css'

const FilmDisplay = ({ displayCards, starItem }) => {

  const sorted = displayCards.sort( (filmA, filmB) => filmA.episode_id > filmB.episode_id)

  const eachCard = sorted.map( i => {
    return (
      <article  key={ i.episode_id }
      className='film-card'>
        <div className="card-header">
          <h1>Star Wars: Episode {i.episode_id}</h1>
          <span value={ i }
            onClick={ () => { starItem(i, 'films') }}
          className="fav-btn">💩</span>
        </div>
        <h3> { i.title } </h3>
        <p>Release Date: { i.release_date }</p>
      </article>
    )
  })

  return (
    <div className='film-display'>
      { eachCard }
    </div>
  )
}

export default FilmDisplay;
