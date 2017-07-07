const uuidv4 = require('uuid/v4')


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
      console.log(data)
      data.map(cVal => {
        Object.assign(cVal, {id: uuidv4()})
      })
      main.setState({
        people: data
      })
    })
    .catch( (error) => {'Error at fetchPeople: ', error})
}

export const fetchPlanets = (value, main) => {
  fetch(`http://swapi.co/api/${value}/`)
    .then(resp => resp.json())
    .then(planet => {
      const unresolvedPromises = planet.results.map(planet => {
        const subPromises = planet.residents.map(person => {
          return fetch(person).then( resp => resp.json())
        })
        return Promise.all(subPromises)
      })
      return Promise.all(unresolvedPromises)
      .then(data => {
        return data.map( (personArray, i) => {
          return personArray.map( (personObject, index) => {
            Object.assign(planet.results[i].residents, {[index]: personObject.name})
            return planet
          })
        })
      })
    })
  .then(planet => {
    planet[0][0].results.map( cVal => {
      Object.assign(cVal, {id: uuidv4()})
    })
    main.setState({
      planets: planet[0][0].results
    })
  })
  .catch(error => {
    console.log('Error at fetchPlanets(): ', error);
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
   data.results.map( cVal => {
     return Object.assign(cVal, {id: uuidv4()})
   })
   main.setState({
     [value]: data.results
   })
 })
}
