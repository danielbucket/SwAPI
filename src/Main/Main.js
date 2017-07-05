import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import React, { Component }                             from 'react'

import { displayFilm, displayPeople } from '../helper'
import FavoritesViewer                from '../FavoritesViewer/FavoritesViewer';
import TypeSelector                   from '../TypeSelector/TypeSelector';
import { fetchPeople, fetchPlanets, fetchVehicles } from '../fetchHelper'
import './Main.css'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: props.favorites,
      films: [],
      people: [],
      planets: [],
      vehicles: []
    }
  }

  itemSelect(e) {

    switch (e.target.value) {
      case 'people':
        fetchPeople(e.target.value, this)
        break;
      case 'planets':
        fetchPlanets(e.target.value)
        break;
      case 'vehicles':
        fetchVehicles(e.target.value)
        break;

    }

  }

  render() {
    return (
      <div className='main'>
        <header className='main-header'>
          <h1>
            Swapi Box
          </h1>
          <FavoritesViewer
            favorites={ this.state.favorites }/>
        </header>
        <TypeSelector
          itemSelect={ this.itemSelect.bind(this) }/>
        <div>
          <Switch>
            <Route exact path='/films' render={
              () => displayFilm(this.state.films) } />
            <Route exact path='/people' render={
              () => displayPeople(this.state.people) } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main;
