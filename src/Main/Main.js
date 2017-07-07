import { Route, Switch, Link } from 'react-router-dom';
import React, { Component }                             from 'react'

import { displayLandingPage, displayFilm, displayPeople, displayPlanets, displayVehicles } from '../helper'
import FavoritesViewer                from '../FavoritesViewer/FavoritesViewer';
import TypeSelector                   from '../TypeSelector/TypeSelector';
import { fetchPeople, fetchPlanets, fetchVehicles, fetchFilms } from '../fetchHelper'
import './Main.css'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      favoriteItems: [],
      favoriteCount: 0,
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
        fetchVehicles(e.target.value, this)
        break;
      case 'films':
        fetchFilms(e.target.value, this)
        break;

    }

  }

  starItem(e, type) {
    // "type" will be assigned a string of either 'film', 'people', 'planets', or 'vehicles'
    // "e" is the object that has been clicked
    Object.assign(e, {type: type})
    const newFavItems = [...this.state.favoriteItems, e]

    // debugger
    const newState = newFavItems.filter( cVal => cVal.id !== e.id )

    if( newState.length !== 0) {
      this.setState({
        favoriteItems: newState,
        favoriteCount: newState.length
      })
    } else {
      this.setState({
        favoriteItems: newFavItems,
        favoriteCount: newFavItems.length
      })
    }
  }

  render() {
    return (
      <div className='main'>
        <header className='main-header'>
          <h1>
            <Link to='/'>
              Swapi Box
            </Link>
          </h1>
          <FavoritesViewer
            favoriteCount={ this.state.favoriteCount }/>
        </header>
        <TypeSelector
          itemSelect={ this.itemSelect }/>
        <div>
        <Route  exact path='/' render={
          () => displayLandingPage(this.state.favoriteItems, this.state.favoriteCount, this.starItem) } />

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
