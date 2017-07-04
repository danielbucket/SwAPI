import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import FavoritesViewer from '../FavoritesViewer/FavoritesViewer';
import TypeSelector from '../TypeSelector/TypeSelector';
import FilmDisplay from '../FilmDisplay/FilmDisplay';
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
      console.log(e.target.value);
      this.setState({
        [e.target.value]: data.results
      })
    })
  }

  render() {
    return (
      <div>
        <header className='main-header'>
          <h1>
            Swapi Box
          </h1>
          <FavoritesViewer favorites={ this.state.favorites }/>
        </header>
        <TypeSelector itemSelect={ this.itemSelect.bind(this) }/>
        <Switch>
          <Route exact path='/films' render={ () => {
            <FilmDisplay  key='film'
                          displayCards={  } />
                        } }/>
          {/* <Route path='display/people' component={
            <PeopleDisplay  key='film'
                            displayPeople={ this.state.people} />
                        } /> */}
        </Switch>

      </div>
    )
  }
}

export default Main;
