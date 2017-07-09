import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';
import { Route, Link, MemoryRouter } from 'react-router-dom'
import fetchMock from 'fetch-mock';


describe('App', () => {

  const resolveAfter2Seconds = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 2000)
    });
  }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })

  it('renders without crashing', () => {
    const wrapper = mount(
      <MemoryRouter >
        <App />
      </MemoryRouter >
    )

  // expect(wrapper.find('.app').length)
    // console.log(wrapper.find('.App') )
  })
})
