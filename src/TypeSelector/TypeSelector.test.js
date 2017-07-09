import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, Link, MemoryRouter } from 'react-router-dom';

import TypeSelector from './TypeSelector';

describe('TypeSelector', () => {

  it('01: should render four buttons wrapped in <Link> tags', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector />)

    expect(wrapper.find('Link').length).toEqual(4)

    expect(wrapper.find('.type-selector').children().length).toEqual(4)
    expect(wrapper.find('button').length).toEqual(4)

    console.log(wrapper.find('Link').first().type().propTypes.target()  )

  })


  it('02: should have a button for films', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#films')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(3)

  })

  it('03: should have a button for people', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#people')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('04: should have a button for planets', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#planets')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('05: should have a button for vehicles', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#vehicles')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })
})
