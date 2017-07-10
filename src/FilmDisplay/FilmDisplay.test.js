import React from 'react';
import { shallow, mount } from 'enzyme';
import FilmDisplay from './FilmDisplay';

describe('FilmDisplay', () => {
  const filmStub = [{
    episode_id: 1,
    favorite: false,
    id: "be07b928-10e0-4aea-b125-e3ebd8177c61",
    title: "The Phantom Menace"
  },
  {
    episode_id: 2,
    favorite: true,
    id: "be07b928-10e0-4aea-b125-e3ebd8177c61",
    title: "Harsh Realities"
  }]

  const mockFunc = jest.fn()
  const wrapper = mount(<FilmDisplay displayCards={ filmStub } starItem={ mockFunc }/>)

  it('01: should render the first object in the props array', () => {

    expect(wrapper.find('.film-display')
                  .props().children[0].key)
                  .toEqual('1')

    expect(wrapper.find('span')
                  .first()
                  .props().className)
                  .toBe('episode-number')

    expect(wrapper.find('.film-display')
                  .props().children[0].props.children[1].props.children[1])
                  .toEqual('The Phantom Menace')

    expect(wrapper.find('.film-display')
                  .props().children[0].props.children[0].props.children[1].props.children)
                  .toEqual('🎃')

  })

  it('02: each card should have a clickable favorite button', () => {
    const favButton = wrapper.find('.fav-btn').first()

    favButton.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)

    favButton.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('03: should render a second card, this time with favorite set to false', () => {

    expect(wrapper.find('.film-display')
                  .props().children[1].key)
                  .toEqual('2')

    expect(wrapper.find('.film-display')
                  .props().children[1].props.children[1].props.children[1])
                  .toEqual('Harsh Realities')

    expect(wrapper.find('.film-display')
                  .props().children[1].props.children[0].props.children[1].props.children)
                  .toEqual('💩')
  })

  it('04: should render two cards if two objects of data are passed in as props', () => {

    expect(wrapper.find('.film-display').props().children.length).toEqual(2)
  })

  it('the card should be structured like this...', () => {

    expect(wrapper.find('.film-display')
                  .props().children[0].type)
                  .toEqual('article')

    expect(wrapper.find('.film-display')
                  .props().children[0].props.className)
                  .toEqual('film-card')

    const card = wrapper.find('.film-display').props().children[0]

    const theCardsClassName = card.props.className
    expect(theCardsClassName).toEqual('film-card')

    const theCardsHeaderType = card.props.children[0].type
    expect(theCardsHeaderType).toEqual('header')

    const theCardsHeaderClassName = card.props.children[0].props.className
    expect(theCardsHeaderClassName).toEqual('card-header')

    expect(card.props.children[0].props.children[0].type).toEqual('h1')
    expect(card.props.children[0].props.children[0].props.className).toEqual('episode-preface')
    expect(card.props.children[0].type).toEqual('header')
  })
})
