import    React   from  'react';
import {  Link }  from  'react-router-dom';
import                  './TypeSelector.css';


const TypeSelector = ({ itemSelect }) => {
  return (
    <div className="type-selector">
      <Link to='/films'>
        <button value='films'
          id='films'
          onClick={ e => itemSelect(e) }>
        Films</button>
      </Link>
      <Link to='/people'>
        <button value='people'
          id='peopls'
          onClick={ e => itemSelect(e) }>
        People</button>
      </Link>
      <Link to='/planets'>
        <button value='planets'
          id='planets'
          onClick={ e => itemSelect(e) }>
          Planets</button>
      </Link>
      <Link to='/vehicles'>
        <button value='vehicles'
          id='vehicles'
          onClick={ e => itemSelect(e) }>
          Vehicles</button>
      </Link>
    </div>
  )
}

export default TypeSelector;
