// imports react and components from react
import React from 'react';
// imports react DOM interface 
import ReactDOM from 'react-dom';
// imports index styling
import './index.css';
// imports app component from app file
import App from './App';
// imports registerService Worker from registerServiceWorker file
import registerServiceWorker from './registerServiceWorker';

// renders app component and all it includes to the #root in the index.html file
ReactDOM.render(<App />, document.getElementById('root'));
// calls registerServiceWorker API to cache your assets when the network is slow, to allow the resources to be seen still
registerServiceWorker();
