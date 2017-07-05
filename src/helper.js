import FilmDisplay from './FilmDisplay/FilmDisplay';
import PeopleDisplay from './PeopleDisplay/PeopleDisplay';
import React from 'react';

export const displayFilm = filmState => {
  return (
    <FilmDisplay displayCards={ filmState } />
  )
}

export const displayPeople = peopleState => {
  return (
    <PeopleDisplay displayCards={ peopleState } />
  )
}
