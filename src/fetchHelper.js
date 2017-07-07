const uuidv4 = require('uuid/v4');

export const fetchPeople = (value, main) => {
  console.log('people');

  fetch(`http://swapi.co/api/${value}/`)
    .then(resp => resp.json())
    .then(peopleArr => {
      const unResHomeworldsArr = peopleArr.results.map(person => {
        return fetch(person.homeworld).then(data => data.json())
      })
      return Promise.all(unResHomeworldsArr).then(homeworldsArr => {
        return homeworldsArr.map((world, i) => {
          return Object.assign(peopleArr.results[i], {homeworld: world})
        })
      })
    })
    .then(peopleArr => {
      const unResSpeciesArr = peopleArr.map(person => {
        return fetch(person.species).then(data => data.json())
      })
      return Promise.all(unResSpeciesArr).then(speciesArr => {
        return speciesArr.map((species, i) => {
          return Object.assign(peopleArr[i], {species: species})
        })
      })
    })
    .then(data => {
      data.map(cVal => {
        Object.assign(cVal, {id: uuidv4()})
      })
      main.setState({
        people: data
      })
    })
}


export const fetchPlanets = (value, main) => {
  console.log('planets')
  fetch(`http://swapi.co/api/${value}/`)
    .then(resp => resp.json())
    .then(planets => {
      const residentsArr = planets.results.map(planet => {
        const residentsNames = planet.residents.map(resident => {
          return fetch(resident)
          .then(data => data.json())
          .then(data => data.name)
        })
        return Promise.all(residentsNames)
          .then(data => {
            return Object.assign(planet, {residents: data})
          })
      })
      return Promise.all(residentsArr)
    })
    .then(data => {
      data.map(cVal => {
        Object.assign(cVal, {id: uuidv4()})
      })
      main.setState({
        planets: data
      })
    })
} // closes fetchPlanets




export const fetchVehicles = () => {
  console.log('vehicles');
}


export const fetchFilms = (value, main) => {
  console.log('films');

  fetch(`http://swapi.co/api/${value}/`)
 .then( resp => resp.json())
 .then( data => {
   data.results.map(cVal => {
     Object.assign(cVal, {id: uuidv4()})
   })
   main.setState({
     [value]: data.results
   })
 })
}
