import React from 'react'
import './PeopleDisplay.css'

const PeopleDisplay = ({ peopleData }) => {

  // console.log(peopleData);

  const peopleCards = peopleData.map(person => {
    const homeworld = fetch(person.homeworld)
    const species = fetch(person.species[0])


    return (
      <div key={person.name} className="person-card">
        <h1 className="person-name">{person.name}</h1>
      </div>
    )
  })

  return (
    <div className="people-display">
      {peopleCards}
    </div>
  )
}

export default PeopleDisplay
