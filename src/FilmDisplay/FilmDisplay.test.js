import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmDisplay from './FilmDisplay';

describe('FilmDisplay', () => {
  const filmStub = [{
    characters: ["http://swapi.co/api/people/3/"],
    created: "2014-12-19T16:52:55.740000Z",
    director: "George Lucas",
    edited: "2015-04-11T09:45:18.689301Z",
    episode_id: 1,
    favorite: false,
    id: "be07b928-10e0-4aea-b125-e3ebd8177c61",
    opening_crawl: "Turmoil has engulfed...",
    planets: [],
    producer: "Rick McCallum",
    release_date : "1999-05-19",
    species: [],
    starships: [],
    title: "The Phantom Menace",
    url: "http://swapi.co/api/films/4/",
    vehicles: [],
    __proto__: {}
  },
  {
    characters: ["http://swapi.co/api/people/4/"],
    created: "2014-12-19T16:52:55.740000Z",
    director: "George Lucas",
    edited: "2015-04-11T09:45:18.689301Z",
    episode_id: 2,
    favorite: false,
    id: "be07b928-10e0-4aea-b125-e3ebd8177c61",
    opening_crawl: "Turmoil has engulfed...",
    planets: [],
    producer: "Rick McCallum",
    release_date : "1999-05-19",
    species: [],
    starships: [],
    title: "Harsh Realities",
    url: "http://swapi.co/api/films/4/",
    vehicles: [],
    __proto__: {}
  }
]
  const mockFunc = jest.fn()
  const wrapper = mount(<FilmDisplay displayCards={ filmStub } starItem={ mockFunc }/>)

  it('01: should render the first object in the props array', () => {

    expect(wrapper.find('.film-display').props().children[0].key).toEqual('1')
    expect(wrapper.find('span').first().props().className).toBe('episode-number')
    expect(wrapper.find('.film-display').props().children[0].props.children[1].props.children[1]).toEqual('The Phantom Menace')
    expect(wrapper.find('.film-display').props().children[0].props.children[0].props.children[1].props.children).toEqual('🎃')

  })

  it('02: each card should have a clickable favorite button', () => {
    const favButton = wrapper.find('.fav-btn').first()

    favButton.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    favButton.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('03: should render a second card', () => {

    expect(wrapper.find('.film-display').props().children[1].key).toEqual('2')
    expect(wrapper.find('.film-display').props().children[1].props.children[1].props.children[1]).toEqual('Harsh Realities')
    expect(wrapper.find('.film-display').props().children[1].props.children[0].props.children[1].props.children).toEqual('🎃')
  })

  it('04: should render two cards if two objects of data are passed in as props', () => {

    expect(wrapper.find('.film-display').props().children.length).toEqual(2)
  })
})
