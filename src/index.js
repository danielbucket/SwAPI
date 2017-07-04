import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './index.css';
import App from './App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'))
