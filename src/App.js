import React, { Component } from 'react';
import './App.css';
import OpeningCrawl from './OpeningCrawl/OpeningCrawl';
import Main from './Main/Main';

// import { filmStub } from './filmCleaner';

class App extends Component {

  constructor() {
    super()
    this.state = {
      filmData: {},
      favorites: 12
    }
  }

  componentDidMount() {
    let randNum = Math.floor(Math.random() * ((7 - 1) + 1)) + 1

    fetch(`http://swapi.co/api/films/${randNum}/`)
    .then((resp) => resp.json())
    .then(data => {
      this.setState({filmData: data})
    })
  }

  render() {
    return (
      <div className="App">
        <OpeningCrawl filmData={ this.state.filmData }/>
        <Main favorites={ this.state.favorites }/>
      </div>
    );
  }
}

export default App;
