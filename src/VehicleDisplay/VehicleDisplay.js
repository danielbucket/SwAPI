import React from 'react';
import            './VehicleDisplay.css';

const VehicleDisplay = ({ displayCards, starItem }) => {
  
  const vehiclesArr = displayCards.map(i => {
    return (
      <div key={ i.name } className="vehicle-card">
        <div className="card-header">
          <h1>{ i.name }</h1>
          <span value={ i }
                onClick={ () => { starItem(i, 'vehicles') } }
                className="fav-btn"
                role='img'
                aria-labelledby='add to favorites'>💩</span>
        </div>
        <p><span className="label">Class:</span> { i.vehicle_class }</p>
        <p><span className="label">Model:</span> { i.model }</p>
        <p><span className="label">Passengers:</span> { i.passengers }</p>
      </div>
    )
  })

  return (
    <div className="vehicle-display">
      { vehiclesArr }
    </div>
  )
}

export default VehicleDisplay;
