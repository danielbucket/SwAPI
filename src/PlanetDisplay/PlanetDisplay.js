import React from 'react'

const PlanetDisplay = ({ displayCards }) => {

  const planetCards = displayCards.map(i => {

    // console.log(i.residents);

    return (
      <div className="planet-card">
        <h1>Name: { i.name }</h1>
        <p>Population: { i.population }</p>
        <p>Climate: { i.climate }</p>
        <p>Terrain: { i.terrain }</p>
        <p>Residents: { i.residents }</p>
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
