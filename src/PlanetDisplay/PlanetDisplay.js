import React from 'react'

const PlanetDisplay = ({ displayCards, starItem }) => {

  const planetCards = displayCards.map(i => {

    return (
      <article  key={ i.name }
                className="planet-card">
        <span   onClick={
          () => { starItem(i, 'planets') } }>💩</span>
        <h1>Name: { i.name }</h1>
        <p>Population: { i.population }</p>
        <p>Climate: { i.climate }</p>
        <p>Terrain: { i.terrain }</p>
        <p>Residents: { i.residents }</p>
      </article>
    )
  })

  return (
    <div>
      {planetCards}
    </div>
  )
}

export default PlanetDisplay;
