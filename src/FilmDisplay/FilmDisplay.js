import React from 'react';

const FilmDisplay = ({ displayCards }) => {

  const eachCard = displayCards.map( i => {
    console.log(i);
    return (
      <div className='card-data'>
        <h1>Star Wars: Episode {i.episode_id}</h1>
        <h3> { i.title } </h3>
        <p>Release Date: { i.release_date }</p>
      </div>
    )
  })

  return (
    <div className='card'>
      { eachCard }
    </div>
  )
}

export default FilmDisplay;
