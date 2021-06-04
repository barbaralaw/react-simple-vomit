// imports react components
import React from 'react';
// import react components for interacting with DOM
import ReactDOM from 'react-dom';
// import App class that is exported from App file
import App from './App';

// tests if App renders without crashing in a real browser environment
it('renders without crashing', () => {
  // creating a div to test with
  const div = document.createElement('div');
  // runs a test rendering with App and div
  ReactDOM.render(<App />, div);
});
