import React from 'react';
import { Link } from 'react-router-dom';


const TypeSelector = ({ itemSelect }) => {


  return (
    <div>
      <Link to={'/film'}>
        <button value='films'
                id='films'
                onClick={ e => itemSelect(e) }
                >Films</button></Link>
      <Link to={'/display/people'}>
        <button value='people'
                id='peopls'
                onClick={ e => itemSelect(e) }
                >People</button></Link>
      <Link to={'/display/planets'}>
        <button value='planets'
                id='planets'
                onClick={ e => itemSelect(e) }
                >Planets</button>
            </Link>

      <Link to={'/display/vehicles'}>
        <button value='vehicles'
                id='vehicles'
                onClick={ e => itemSelect(e) }
                >Vehicles</button>
      </Link>
    </div>
  )

}

export default TypeSelector;
