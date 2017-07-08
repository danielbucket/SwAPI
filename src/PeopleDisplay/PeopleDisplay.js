import React from 'react';
import            './PeopleDisplay.css';

const PeopleDisplay = ({ displayCards, starItem }) => {

  const peopleCards = displayCards.map( i => {

    let favIcon = i.favorite ? '💩' : '🎃'

    return (
      <article  key={i.name}
      className="people-cards">
        <div className="card-header">
          <h1 className="person-name">{ i.name }</h1>
          <span value={ i }
            onClick={ () => { starItem(i, 'people') } }
            className="fav-btn"
            role='img'
          aria-labelledby='add to favorites'>{favIcon}</span>
        </div>
        <p className="person-weight"><span className="label">Weight: </span><span className="value">{ i.mass }</span></p>
        <p className="person-hw"><span className="label">Homeworld: </span><span className="value">{ i.homeworld.name }</span></p>
        <p className="person-hw-pop"><span className="label">Population: </span><span className="value">{ i.homeworld.population }</span></p>
        <p className="person-species"><span className="label">Species: </span><span className="value">{ i.species.name }</span></p>
      </article>
    )
  })

  return (
    <div className="people-component">
      <h1>PEOPLE</h1>
      <div className="people-display">
        { peopleCards }
      </div>
    </div>
  )
}

export default PeopleDisplay;
