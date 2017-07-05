<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
=======
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import React, { Component }                             from 'react'
>>>>>>> display-people-data

import { displayFilm, displayPeople } from '../helper'
import FavoritesViewer                from '../FavoritesViewer/FavoritesViewer';
import TypeSelector                   from '../TypeSelector/TypeSelector';
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
    e.persist()
    fetch(`http://swapi.co/api/${e.target.value}/`)
    .then( resp => resp.json())
    .then( data => {
      this.setState({
        [e.target.value]: data.results
      })
    })
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
