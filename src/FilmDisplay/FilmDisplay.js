import React from 'react';

const FilmDisplay = ({ displayItems }) => {
  const eachCard = displayItems.map( i => {
  console.log(i);

    return (
      <div className='card-data'>
        'tittley winks'
      </div>
    )
  })

  return (
    <div className='card'>
      {/* { eachCard } */}
    </div>
  )
}

export default FilmDisplay;
