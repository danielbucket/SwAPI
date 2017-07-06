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
      main.setState({
        people: data
      })
    })





  // fetch(`http://swapi.co/api/${value}/`)
  //   .then( resp => resp.json())
  //   .then(data => {
  //     data.results.forEach((person, i) => {
  //       peopleData.push(person)
  //
  //       const homeworld = fetch(person.homeworld)
  //         .then(data => data.json())
  //         .then(data => {return {name: data.name, population: data.population}})
  //
  //       const species = fetch(person.species)
  //         .then(data => data.json())
  //         .then(data => data.name)
  //
  //       Promise.all([homeworld, species])
  //         .then(data => {
  //           peopleData[i] = Object.assign(peopleData[i], {homeworld: data[0].name, population: data[0].population, species: data[1]})
  //           main.setState({people: peopleData})
  //         })
  //
  //     })
  //   })

}




export const fetchPlanets = (value, main) => {
  console.log('planets');

  const planetData = []

  fetch(`http://swapi.co/api/${value}/`)
    .then( resp => resp.json())
    // .then(data => console.log(data.results))
    .then(data => {
      data.results.forEach((planet, i) => {
        planetData.push(planet)
        const allResidents = []
        planet.residents.forEach(resi => {
          fetch(resi)
            .then(resp => resp.json())
            .then(data => {
              allResidents.push(data.name)
              console.log(allResidents);
              planetData[i] = Object.assign(planetData[i], {residents: allResidents})
              main.setState({planets: planetData});
            })
        })
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
   main.setState({
     [value]: data.results
   })
 })
}
