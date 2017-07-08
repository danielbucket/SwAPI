import { shallow, mount } from 'enzyme';
import React from 'react';
import Main from './Main'

describe('<Main /> component', function () {

  it('should render "SWAPI BOX" header text', () => {
    const wrapper = shallow(<Main />)
    const logo = wrapper.find('.logo')

    expect(logo.props().children).toEqual('Swapi Box')
  });

  it('should render a FavoritesViewer component', () => {
    const wrapper = shallow(<Main />)
    const FavViewerComp = wrapper.find('FavoritesViewer')

    expect(FavViewerComp.length).toEqual(1);
  });

  it('should render a TypeSelector component', () => {
    const wrapper = shallow(<Main />)
    const TypeSelectorComp = wrapper.find('TypeSelector')

    expect(TypeSelectorComp.length).toEqual(1);
  });

  it('should have 6 keys in state', () => {
    const wrapper = shallow(<Main />);
    const state = wrapper.state();

    const expectedStateKeys = [
      'favoriteItems',
      'favoriteCount',
      'films',
      'people',
      'planets',
      'vehicles'
      ]

    expect(Object.keys(state).length).toEqual(6);
    expect(Object.keys(state)).toEqual(expectedStateKeys);
  });

});
