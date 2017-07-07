import React          from 'react';
import FilmDisplay    from '../FilmDisplay/FilmDisplay';
import PeopleDisplay  from '../PeopleDisplay/PeopleDisplay';
import PlanetDisplay  from '../PlanetDisplay/PlanetDisplay';
import VehicleDisplay from '../VehicleDisplay/VehicleDisplay';
import                     './LandingPage.css';

const LandingPage = ({ favItems, favsCount, starItem }) => {
  const grouped = favItems.reduce( (newArr, cVal) => {
    switch (cVal.type) {
      case 'films':     newArr.films.push(cVal);    break;
      case 'people':    newArr.people.push(cVal);   break;
      case 'planets':   newArr.planets.push(cVal);  break;
      case 'vehicles':  newArr.vehicles.push(cVal); break;
    }
    return newArr
  }, {films:[], people:[], planets:[], vehicles:[]})

  return (
    <div>
      <h1>Welcome back, Star Guy!</h1>
      <p>You have clicked on "{ favsCount }" poops as your favorite poops.</p>
      <p>Here are the poops and their cards:</p>
      <div className="favorites-display">
        <FilmDisplay  displayCards={ grouped.films }
                      starItem={ starItem } />
        <PeopleDisplay  displayCards={ grouped.people }
                        starItem={ starItem } />
        <PlanetDisplay  displayCards={ grouped.planets }
                        starItem={ starItem } />
        <VehicleDisplay displayCards={ grouped.vehicles }
                        starItem={ starItem } />
      </div>
    </div>
  )
}
export default LandingPage;
