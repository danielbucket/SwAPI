import React from 'react'
import './PeopleDisplay.css'

const PeopleDisplay = ({ displayCards }) => {


  const peopleCards = displayCards.map( i => {



    return (
      <div key={i.name} className="people-cards">
        <h3>Name: { i.name }</h3>
        <p>Weight: { i.mass }</p>
        <p>Homeworld: {i.homeworld.name}</p>
        <p>Population: {i.homeworld.population}</p>
        <p>Species: {i.species.name}</p>
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
