import FilmDisplay from './FilmDisplay/FilmDisplay';
import PeopleDisplay from './PeopleDisplay/PeopleDisplay';
import React from 'react';

export const displayFilm = (filmState, starItem) => {
  return (
    <FilmDisplay  displayCards={ filmState }
                  starItem={ starItem } />
  )
}

export const displayPeople = peopleState => {
  return (
    <PeopleDisplay  displayCards={ peopleState } />
  )
}
