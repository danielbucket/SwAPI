import React from 'react';

const VehicleDisplay = ({ displayCards }) => {

  const vehiclesArr = displayCards.map(item => {
    return (
      <div>
        <h1>Name: {item.name}</h1>
        <p>Class: {item.vehicle_class}</p>
        <p>Model: {item.model}</p>
        <p>Passengers: {item.passengers}</p>
      </div>
    )
  })

  return (
    <div>
      {vehiclesArr}
    </div>
  )
}

export default VehicleDisplay;
