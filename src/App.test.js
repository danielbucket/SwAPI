import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme'

it('renders without crashing', () => {
  const wrapper = mount(<App/>)
  console.log(wrapper.debug());
});
