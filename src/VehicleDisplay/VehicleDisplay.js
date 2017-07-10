import React from 'react';
import            './VehicleDisplay.css';

const VehicleDisplay = ({ displayCards, starItem }) => {
  
  const vehiclesArr = displayCards.map(i => {

    let favIcon = i.favorite ? '💩' : '🎃'

    return (
      <div key={ i.name } className="vehicle-card">
        <div className="card-header">
          <h1 className="vehicle-name">{ i.name }</h1>
          <span value={ i }
            onClick={ () => { starItem(i, 'vehicles') } }
            className="fav-btn"
            role='img'
          aria-labelledby='add to favorites'>{favIcon}</span>
        </div>
        <p className="vehicle-class"><span className="label">Class: </span><span className="value">{ i.vehicle_class }</span></p>
        <p className="vehicle-model"><span className="label">Model: </span><span className="value">{ i.model }</span></p>
        <p className="vehicle-passengers"><span className="label">Passengers: </span><span className="value">{ i.passengers }</span></p>
      </div>
    )
  })

  return (
    <div className="vehicle-component">
      <h1>VEHICLES</h1>
      <div className="vehicle-display">
        { vehiclesArr }
      </div>
    </div>
  )
}

export default VehicleDisplay;
