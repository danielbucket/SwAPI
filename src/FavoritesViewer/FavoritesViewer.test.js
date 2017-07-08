import { shallow, mount } from 'enzyme';
import React from 'react';
import FavoritesViewer from './FavoritesViewer.js';

describe( 'FavoritesViewer', () => {
  it('should take a shit', () => {
    const wrapper = shallow(<FavoritesViewer />)

    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should have props', () => {
    const wrapper = shallow(<FavoritesViewer favoriteCount={ 10 }/>)
    const favsCount = wrapper.find('.fav-count')

    expect(favsCount.props().children).toEqual(10)
  })

  it('should do a thing', () => {
    const wrapper = shallow(<FavoritesViewer />)

    expect(wrapper.children().props().children.props.className).toBe('all-favs-button')
  })

  it('should be wrapped in a <Link to='/'> tag', () => {
    const wrapper = shallow(<FavoritesViewer />)

    expect(wrapper.find('Link').props().to).toEqual('/')
  })
})
