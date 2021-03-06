import React from 'react';
import            './PlanetDisplay.css';

const PlanetDisplay = ({ displayCards, starItem }) => {
  const planetCards = displayCards.map(i => {

    let favIcon = i.favorite ? '💩' : '🎃'

    let residentsList = i.residents.map((resi, index) => {
      return (
        <li key={ resi }>{ resi }</li>
      )
    })

    if (residentsList.length === 0) {
      residentsList = <li>Uninhabited</li>
    }

    return (
      <div key={ i.name } className="planet-card">
        <div className="planet-header">
          <h1 className='planet-name'>{ i.name }</h1>
          <span value={ i }
            onClick={ () => { starItem(i, 'planets') } }
            className="fav-btn"
            role='img'
          aria-labelledby='add to favorites'>{ favIcon }</span>
        </div>
        <p><span className="label">Population:</span> { i.population }</p>
        <p><span className="label">Climate:</span> { i.climate }</p>
        <p><span className="label">Terrain:</span> { i.terrain }</p>
        <p><span className="label">Residents:</span></p>
        <ul>{ residentsList }</ul>
      </div>
    )
  })

  return (
    <div className="planet-component">
      <h1>PLANETS</h1>
      <div className="planet-display">
        { planetCards }
      </div>
    </div>
  )
}

export default PlanetDisplay;
