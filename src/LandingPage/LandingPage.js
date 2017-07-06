import React from 'react';
import FilmDisplay from '../FilmDisplay/FilmDisplay';
import PeopleDisplay from '../PeopleDisplay/PeopleDisplay';

const LandingPage = ({ favItems, favsCount, starItem }) => {

  const keys = Object.keys(favItems)
  const cards = keys.map( i => {
    if (favItems[i].type === 'films') {
      return (
        <FilmDisplay  displayCards={ [favItems[i]] }
                      starItem={ starItem } />
      )
    }
    if (favItems[i].type === 'people') {
      return (
        <PeopleDisplay  displayCards={ [favItems[i]] }
                        starItem={ starItem } />
      )
    }
  })

  return (
    <div>
      <h1>Welcome back, Star Guy!</h1>
      <p>You have "{ favsCount }" pooped items as your favorites</p>
      <p>Here they are:</p>
      <div>{ cards }</div>
    </div>
  )
}

export default LandingPage;
