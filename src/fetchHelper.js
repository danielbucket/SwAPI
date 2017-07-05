export const fetchPeople = (value, main) => {
  console.log('people');

  const peopleData = []

  fetch(`http://swapi.co/api/${value}/`)
    .then( resp => resp.json())
    .then(data => {
      data.results.forEach((person, i) => {
        peopleData.push(person)

        const homeworld = fetch(person.homeworld)
          .then(data => data.json())
          .then(data => {return {name: data.name, population: data.population}})

        const species = fetch(person.species)
          .then(data => data.json())
          .then(data => data.name)

        Promise.all([homeworld, species])
          .then(data => {
            peopleData[i] = Object.assign(peopleData[i], {homeworld: data[0].name, population: data[0].population, species: data[1]})
            main.setState({people: peopleData})
          })

      })
    })

}




export const fetchPlanets = () => {
  console.log('planets');
}




export const fetchVehicles = () => {
  console.log('vehicles');
}
