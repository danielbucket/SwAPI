import React from 'react'
import './PeopleDisplay.css'

const PeopleDisplay = ({ displayCards, starItem }) => {

  const peopleCards = displayCards.map( i => {
    return (
      <article  key={i.name}
      className="people-cards">
        <div className="card-header">
          <h1>{ i.name }</h1>
          <span
            value={ i }
            onClick={ () => { starItem(i, 'people') } }
          className="fav-btn">💩</span>
        </div>

        <p><span className="label">Weight: </span>{ i.mass }</p>
        <p><span className="label">Homeworld: </span>{ i.homeworld.name }</p>
        <p><span className="label">Population: </span>{ i.homeworld.population }</p>
        <p><span className="label">Species: </span>{ i.species.name }</p>
      </article>
    )
  })






  return (
    <div className="people-display">
      { peopleCards }
    </div>
  )
}

export default PeopleDisplay
