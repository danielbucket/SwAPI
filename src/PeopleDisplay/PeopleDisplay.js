import React from 'react'
import './PeopleDisplay.css'

const PeopleDisplay = ({ displayCards }) => {

  const peopleCards = displayCards.map( i => {



    return (
      <div key={i.name} className="people-cards">
        <h3>Name: { i.name }</h3>
        <p>Weight: { i.mass }</p>
        <p>Homeworld: {i.homeworld}</p>
        <p>Population: {i.population}</p>
        <p>Species: {i.species}</p>
      </div>
    )
  })


  return (
    <div className="people-display">
      { peopleCards }
    </div>
  )
}

export default PeopleDisplay
