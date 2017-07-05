import React from 'react';
import './FilmDisplay.css'

const FilmDisplay = ({ displayCards }) => {
<<<<<<< HEAD
  console.log(displayCards);

  // const eachCard = displayCards.map( i => {
    // return (
    //   <div className='card-data'>
    //     <h1>Star Wars: Episode {i.episode_id}</h1>
    //     <h3> { i.title } </h3>
    //     <p>Release Date: { i.release_date }</p>
    //   </div>
    // )
  // })
=======

  const sorted = displayCards.sort((filmA, filmB) => filmA.episode_id > filmB.episode_id)

  const eachCard = sorted.map( i => {
    return (
      <div key={i.episode_id} className='card-data'>
        <h1>Star Wars: Episode {i.episode_id}</h1>
        <h3> { i.title } </h3>
        <p>Release Date: { i.release_date }</p>
      </div>
    )
  })
>>>>>>> display-people-data

  return (
    <div className='card-container'>
      { eachCard }
    </div>
  )
}

export default FilmDisplay;
