import React from 'react';
import { shallow, mount } from 'enzyme';
import { Route, Link, MemoryRouter } from 'react-router-dom';

import TypeSelector from './TypeSelector';

describe('TypeSelector', () => {

  it('00: TypeSelector should render four children wrapped in a single <div>', () => {
    const wrapper = shallow(<TypeSelector />)

    expect(wrapper.find('TypeSelector').root.node.props.className).toEqual('type-selector')
    expect(wrapper.find('TypeSelector').root.node.props.children.length).toEqual(4)
  })

  it('01: should render four buttons wrapped in <Link> tags', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector />)

    expect(wrapper.type()).toEqual('div')
    expect(wrapper.find('Link').length).toEqual(4)

    expect(wrapper.find('.type-selector').children().length).toEqual(4)
    expect(wrapper.find('button').length).toEqual(4)
    expect(wrapper.find('Link').length).toEqual(4)
  })

  it('02: should have a button for films that is wrapped in a <Link> tag', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#films')

    expect(wrapper.find('Link').nodes[0].props.to).toEqual('/films')
    expect(wrapper.find('button').nodes[0].type).toEqual('button')
    expect(wrapper.find('button').nodes[0].props.id).toEqual('films')
    expect(wrapper.find('button').nodes[0].props.children).toEqual('Films')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('03: should have a button for people that is wrapped in a <Link> tag', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#people')

    expect(wrapper.find('Link').nodes[1].props.to).toEqual('/people')
    expect(wrapper.find('button').nodes[1].type).toEqual('button')
    expect(wrapper.find('button').nodes[1].props.id).toEqual('people')
    expect(wrapper.find('button').nodes[1].props.children).toEqual('People')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('04: should have a button for planets that is wrapped in a <Link> tag', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#planets')

    expect(wrapper.find('Link').nodes[2].props.to).toEqual('/planets')
    expect(wrapper.find('button').nodes[2].type).toEqual('button')
    expect(wrapper.find('button').nodes[2].props.id).toEqual('planets')
    expect(wrapper.find('button').nodes[2].props.children).toEqual('Planets')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })

  it('05: should have a button for vehicles that is wrapped in a <Link> tag', () => {
    const mockFunc = jest.fn()
    const wrapper = shallow(<TypeSelector itemSelect={ mockFunc }/>)
    const button = wrapper.find('#vehicles')

    expect(wrapper.find('Link').nodes[3].props.to).toEqual('/vehicles')
    expect(wrapper.find('button').nodes[3].type).toEqual('button')
    expect(wrapper.find('button').nodes[3].props.id).toEqual('vehicles')
    expect(wrapper.find('button').nodes[3].props.children).toEqual('Vehicles')

    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(1)
    button.simulate('click')
    expect(mockFunc).toHaveBeenCalledTimes(2)
  })
})
