import FilmDisplay    from '../FilmDisplay/FilmDisplay';
import PeopleDisplay  from '../PeopleDisplay/PeopleDisplay';
import PlanetDisplay  from '../PlanetDisplay/PlanetDisplay';
import VehicleDisplay from '../VehicleDisplay/VehicleDisplay';
import LandingPage    from '../LandingPage/LandingPage';
import React          from 'react';

export const displayLandingPage = (favs, count, starItem) => {
  return (
    <LandingPage  favItems={ favs }
                  favsCount={ count }
                  starItem={ starItem } />
  )
}

export const displayFilm = (filmState, starItem) => {
  return (
    <FilmDisplay  displayCards={ filmState }
                  starItem={ starItem } />
  )
}

export const displayPeople = (peopleState, starItem) => {
  return (
    <PeopleDisplay  displayCards={ peopleState }
                    starItem={ starItem } />
  )
}

export const displayPlanets = (planetState, starItem) => {
  return (
    <PlanetDisplay  displayCards={ planetState }
                    starItem={ starItem } />
  )
}

export const displayVehicles = (vehicleState, starItem) => {
  return (
    <VehicleDisplay displayCards={ vehicleState }
                    starItem={ starItem } />
  )
}
