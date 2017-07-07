import React, { Component } from 'react';
import OpeningCrawl         from './OpeningCrawl/OpeningCrawl';
import Main                 from './Main/Main';
import                           './App.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      filmData: {},
    }
  }

  componentDidMount() {
    let randNum = Math.floor(Math.random() * ((7 - 1) + 1)) + 1

    fetch(`http://swapi.co/api/films/${randNum}/`)
    .then((resp) => resp.json())
    .then(data => {
      this.setState({filmData: data})
    })
    .catch(error => console.log('Danger Will Robinson! :', error))
  }

  render() {
    return (
      <div className="App">
        <OpeningCrawl filmData={ this.state.filmData }/>
        <Main />
      </div>
    )
  }
}

export default App;
