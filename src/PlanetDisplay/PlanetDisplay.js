import React from 'react'

const PlanetDisplay = ({ displayCards, starItem }) => {

  const planetCards = displayCards.map(i => {

    let residentsList = i.residents.map((resi, index) => {
      return (
        <li key={resi}>{resi}</li>
      )
    })

    if(residentsList.length === 0) {
      residentsList = 'Uninhabited'
    }

    return (

      <div key={i.name} className="planet-card">
        <h1>Name: { i.name }</h1>
        <p>Population: { i.population }</p>
        <p>Climate: { i.climate }</p>
        <p>Terrain: { i.terrain }</p>
        <p>Residents:</p>
        <ul>{ residentsList }</ul>
      </div>
    )
  })

  return (
    <div>
      {planetCards}
    </div>
  )
}

export default PlanetDisplay;
