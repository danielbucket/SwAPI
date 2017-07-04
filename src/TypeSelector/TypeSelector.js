import React from 'react';
import { Link } from 'react-router-dom';
import './TypeSelector.css'


const TypeSelector = ({ itemSelect }) => {

  return (
    <div className="type-selector">
      <button value='films'
              id='films'
              onClick={ e => itemSelect(e) }
              >Films</button>
      <button value='people'
              id='peopls'
              onClick={ e => itemSelect(e) }
              >People</button>
      <button value='planets'
              id='planets'
              onClick={ e => itemSelect(e) }
              >Planets</button>

      <button value='vehicles'
              id='vehicles'
              onClick={ e => itemSelect(e) }
              >Vehicles</button>
    </div>
  )

}

export default TypeSelector;
