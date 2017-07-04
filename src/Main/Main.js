import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import FavoritesViewer from '../FavoritesViewer/FavoritesViewer';
import TypeSelector from '../TypeSelector/TypeSelector';
import FilmDisplay from '../FilmDisplay/FilmDisplay';
import PeopleDisplay from '../PeopleDisplay/PeopleDisplay';
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
        <FilmDisplay
          key='film'
          displayCards={ this.state.films } />
        <PeopleDisplay
          peopleData={ this.state.people }/>
      </div>
    )
  }
}

export default Main;
