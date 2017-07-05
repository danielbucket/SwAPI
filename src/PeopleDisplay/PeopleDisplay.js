import React from 'react'
import './PeopleDisplay.css'

const PeopleDisplay = ({ displayCards }) => {

  console.log(displayCards)
  const peopleCards = displayCards.map( i => {
    return (
      <div>
        <h3>name: { i.name }</h3>
        <p>weight: { i.mass }</p>
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
