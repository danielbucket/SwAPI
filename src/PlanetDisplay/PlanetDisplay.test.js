import { shallow, mount } from 'enzyme';
import React from 'react';
import PlanetDisplay from './PlanetDisplay.js';

describe('PlanetDisplay', () => {
  const planetStub = [{
    "name": "Alderaan",
    "rotation_period": "24",
    "orbital_period": "364",
    "diameter": "12500",
    "climate": "temperate",
    "gravity": "1 standard",
    "terrain": "grasslands, mountains",
    "surface_water": "40",
    "population": "2000000000",
    "residents": [ "Leia Organa", "Bail Prestor Organa", "Raymus Antilles" ],
    "films": [ "http://swapi.co/api/films/6/", "http://swapi.co/api/films/1/" ],
    "created": "2014-12-10T11:35:48.479000Z",
    "edited": "2014-12-20T20:58:18.420000Z",
    "url": "http://swapi.co/api/planets/2/",
    "id": "f0bc8dc4-98a3-48bb-ae18-0d432f08c89d",
    "favorite": false
  },
  { "name": "Yavin IV",
    "rotation_period": "24",
    "orbital_period": "4818",
    "diameter": "10200",
    "climate": "temperate, tropical",
    "gravity": "1 standard",
    "terrain": "jungle, rainforests",
    "surface_water": "8",
    "population": "1000",
    "residents": [],
    "films": [ "http://swapi.co/api/films/1/" ],
    "created": "2014-12-10T11:37:19.144000Z",
    "edited": "2014-12-20T20:58:18.421000Z",
    "url": "http://swapi.co/api/planets/3/",
    "id": "b363d20c-634c-459f-b05e-21e64d2080a6",
    "favorite": false }]

  const mockFn = jest.fn()
  const wrapper = mount(<PlanetDisplay displayCards={ planetStub } starItem={ mockFn }/>)


  it('01: should render multiple cards', () => {

    expect(wrapper.find('.planet-card').length).toEqual(2)
  })


  it('02: should have specific data types', () => {
    const planetDataTypes = wrapper.find('.planet-display').props().children[0].props.children

    expect(wrapper.find('.planet-display').props().children[0].key).toEqual('Alderaan')
    expect(planetDataTypes[1].props.children[0].props.children).toEqual('Population:')
    expect(planetDataTypes[2].props.children[0].props.children).toEqual('Climate:')
    expect(planetDataTypes[3].props.children[0].props.children).toEqual('Terrain:')
  })

  it('03: should have a button', () => {
    const button = wrapper.find('.fav-btn').first()

    button.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  it('03: should', () => {
    
  })
})
