import { Route, Switch } from 'react-router-dom';
import React, { Component }                             from 'react'

import { displayFilm, displayPeople, displayPlanets, displayVehicles } from '../helper'
import FavoritesViewer                from '../FavoritesViewer/FavoritesViewer';
import TypeSelector                   from '../TypeSelector/TypeSelector';
import { fetchPeople, fetchPlanets, fetchVehicles } from '../fetchHelper'
import './Main.css'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      favorites: {
        favoritesCount: props.favoritesCount,
        favoritesItems: {}
      },
      films: [],
      people: [],
      planets: [],
      vehicles: []
    }
    this.itemSelect = this.itemSelect.bind(this)
    this.starItem = this.starItem.bind(this)
  }

  itemSelect(e) {

    switch (e.target.value) {
      case 'people':
        fetchPeople(e.target.value, this)
        break;
      case 'planets':
        fetchPlanets(e.target.value, this)
        break;
      case 'vehicles':
        fetchVehicles(e.target.value)
        break;

    }

  }

  starItem(e) {
    console.log('ass bad :', e.target)
  }

  render() {
    return (
      <div className='main'>
        <header className='main-header'>
          <h1>
            Swapi Box
          </h1>
          <FavoritesViewer
            favoritesCount={ this.state.favorites.favoritesCount }/>
        </header>
        <TypeSelector
          itemSelect={ this.itemSelect }/>
        <div>
          <Switch>
            <Route  exact path='/films'
              render={
                () => displayFilm(this.state.films, this.starItem) } />
            <Route  exact path='/people'
              render={
                () => displayPeople(this.state.people, this.starItem) } />
            <Route  exact path='/planets'
              render={
                () => displayPlanets(this.state.planets, this.starItem) } />
            <Route  exact path='/vehicles'
              render={
                () => displayVehicles(this.state.vehicles, this.starItem) } />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Main;
