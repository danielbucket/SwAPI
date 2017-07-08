import { shallow, mount } from 'enzyme';
import React from 'react';
import FavoritesViewer from './FavoritesViewer.js';

describe( 'FavoritesViewer', () => {
  const wrapper = shallow(<FavoritesViewer favoriteCount={ 10 }/>)

  it('01: should take a shit', () => {

    expect(wrapper.find('div').length).toEqual(1)
  })

  it('02: should have props', () => {
    const favsCount = wrapper.find('.fav-count')

    expect(favsCount.props().children).toEqual(10)
  })

  it('03: should do a thing', () => {

    expect(wrapper.children().props().children.props.className).toBe('all-favs-button')
  })

  it('04: should be wrapped in a <Link to='/'> tag', () => {

    expect(wrapper.find('Link').props().to).toEqual('/')
  })
})
