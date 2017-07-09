import React          from 'react';
import FilmDisplay    from '../FilmDisplay/FilmDisplay';
import PeopleDisplay  from '../PeopleDisplay/PeopleDisplay';
import PlanetDisplay  from '../PlanetDisplay/PlanetDisplay';
import VehicleDisplay from '../VehicleDisplay/VehicleDisplay';
import                     './LandingPage.css';

const LandingPage = ({ favItems, favsCount, starItem }) => {
  const grouped = favItems.reduce( (obj, cVal) => {
    switch (cVal.type) {
      case 'films':     obj.films.push(cVal);    break;
      case 'people':    obj.people.push(cVal);   break;
      case 'planets':   obj.planets.push(cVal);  break;
      case 'vehicles':  obj.vehicles.push(cVal); break;
      default:
    }
    return obj
  }, {films:[], people:[], planets:[], vehicles:[]})

  return (
    <div>
      <h1>Welcome back, Star Guy!</h1>
      <p>You have clicked on "<span className="favorites-total">{ favsCount }</span>" poops as your favorite poops.</p>
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
