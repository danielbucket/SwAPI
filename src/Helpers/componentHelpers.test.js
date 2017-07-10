import React                    from 'react';
import { shallow, mount }       from 'enzyme';
import fetchMock                from 'fetch-mock';

import {  planetStub,
          peopleStub,
          filmStub,
          vehicleStub }         from './stubs'
import {  displayLandingPage,
          displayFilm,
          displayPeople,
          displayPlanets,
          displayVehicles }     from './componentHelpers';
import    LandingPage           from '../LandingPage/LandingPage';


describe('displayLandingPage', () => {
  const favs = planetStub
  const count = favs.length
  const mockFunc = jest.fn()
  const newLandingPage = displayLandingPage(favs, count, mockFunc)


  it('should render the LandingPage', () => {
    const wrapper = mount(newLandingPage)

    expect (wrapper.props().favItems).toEqual(favs)
    expect(wrapper.props().favsCount).toEqual(count)
    expect(wrapper.props().starItem).toEqual(mockFunc)
    expect(wrapper.children().root.component.state.mount).toEqual(true)
  })
})

describe('displayFilm', () => {
  const filmState = filmStub
  const mockFunc = jest.fn()
  const newDisplayFilm = displayFilm(filmState, mockFunc)

  it('should render <FilmDisplay />', () => {
    const wrapper = mount(newDisplayFilm)

    expect(wrapper.props().displayCards).toEqual(filmState)
    expect(wrapper.props().starItem).toEqual(mockFunc)
    expect(wrapper.children().root.component.state.mount).toEqual(true)
  })
})

describe('displayPeople', () => {
  const peopleState = peopleStub
  const mockFunc = jest.fn()
  const newDisplayPeople = displayPeople(peopleState, mockFunc)

  it('should render <PeopleDisplay />', () => {
    const wrapper = mount(newDisplayPeople)

    expect(wrapper.props().displayCards).toEqual(peopleState)
    expect(wrapper.props().starItem).toEqual(mockFunc)
    expect(wrapper.children().root.component.state.mount).toEqual(true)
  })
})

describe('displayPlanets', () => {
  const planetState = planetStub
  const mockFunc = jest.fn()
  const newDisplayPlanets = displayPlanets(planetState, mockFunc)

  it('should render <PlanetDisplay />', () => {
    const wrapper = mount(newDisplayPlanets)

    expect(wrapper.props().displayCards).toEqual(planetState)
    expect(wrapper.props().starItem).toEqual(mockFunc)
    expect(wrapper.children().root.component.state.mount).toEqual(true)
  })
})

describe('displayVehicles', () => {
  const vehicleState = planetStub
  const mockFunc = jest.fn()
  const newDisplayVehicles = displayVehicles(vehicleState, mockFunc)

  it('should render <VehicleDisplay />', () => {
    const wrapper = mount(newDisplayVehicles)

    expect(wrapper.props().displayCards).toEqual(vehicleState)
    expect(wrapper.props().starItem).toEqual(mockFunc)
    expect(wrapper.children().root.component.state.mount).toEqual(true)
  })
})
