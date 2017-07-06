import React from 'react'
import './PeopleDisplay.css'

const PeopleDisplay = ({ displayCards, starItem }) => {

  const peopleCards = displayCards.map( i => {
    return (
      <article  key={i.name}
                className="people-cards">
        <span value={ i }
              onClick={ () => { starItem(i, 'people') } }>💩</span>
        <h3>Name: { i.name }</h3>
        <p>Weight: { i.mass }</p>
        <p>Homeworld: { i.homeworld.name }</p>
        <p>Population: { i.homeworld.population }</p>
        <p>Species: { i.species.name }</p>
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
