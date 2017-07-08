import {  Route, Switch }             from 'react-router-dom';
import    React, { Component }              from 'react';

import                                           './Main.css';
import    FavoritesViewer                   from '../FavoritesViewer/FavoritesViewer';
import    TypeSelector                      from '../TypeSelector/TypeSelector';
import {  displayLandingPage,
          displayFilm,
          displayPeople,
          displayPlanets,
          displayVehicles }                 from '../Helpers/componentHelpers';
import {  fetchPeople,
          fetchPlanets,
          fetchVehicles,
          fetchFilms }                      from '../fetchHelper';


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
        if (this.state.people.length > 0) break;
        fetchPeople(e.target.value, this);
        break;
      case 'planets':
        if (this.state.planets.length > 0) break;
        fetchPlanets(e.target.value, this);
        break;
      case 'vehicles':
        if (this.state.vehicles.length > 0) break;
        fetchVehicles(e.target.value, this);
        break;
      case 'films':
        if (this.state.films.length > 0) break;
        fetchFilms(e.target.value, this);
        break;
      default:
    }
  }

  starItem(block, type) {
    Object.assign(block, {type: type, favorite: !block.favorite})
    const newFavItems = [...this.state.favoriteItems, block]
    const findBlock = this.state.favoriteItems.indexOf(block)

    if (findBlock >= 0) {
      const newState = newFavItems.filter( cVal => cVal.id !== block.id )
      this.setState({
        favoriteItems: newState,
        favoriteCount: newState.length
      })
    }

    if (findBlock === -1) {
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
          <h1 className="logo">
            Swapi Box
          </h1>
          <FavoritesViewer favoriteCount={ this.state.favoriteCount }/>
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
