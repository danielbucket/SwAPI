import { Route, Switch, Link } from 'react-router-dom';
import React, { Component }                             from 'react'

import { displayLandingPage, displayFilm, displayPeople, displayPlanets, displayVehicles } from '../helper'
import FavoritesViewer                from '../FavoritesViewer/FavoritesViewer';
import TypeSelector                   from '../TypeSelector/TypeSelector';
import './Main.css'


class Main extends Component {
  constructor() {
    super()
    this.state = {
      favoritesItems: [],
      //favoritesCount should be the length of the favoritesItems array
      favoritesCount: 0,
      films: [],
      people: [],
      planets: [],
      vehicles: []
    }
    this.itemSelect = this.itemSelect.bind(this)
    this.starItem = this.starItem.bind(this)
  }

  itemSelect(e) {
    e.persist()
    fetch(`http://swapi.co/api/${e.target.value}/`)
    // fetch('../assets/TestingStubs/filmStub')
    .then( resp => resp.json())
    .then( data => {
      this.setState({
        [e.target.value]: data.results
      })
    })
  }

  starItem(e) {
    console.log('ass bad :', e)
    this.setState({
      favoritesItems: Object.assign(this.state.favoritesItems, e)
    })
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
            favoritesCount={ this.state.favoritesCount }/>
        </header>
        <TypeSelector
          itemSelect={ this.itemSelect }/>
        <div>
        <Route  exact path='/' render={
          () => displayLandingPage(this.state.favoritesItems, this.state.favoritesCount, this.starItem) } />
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
