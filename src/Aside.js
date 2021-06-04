// import react components from react
import React, { Component } from 'react';
// import aside styling
import './Aside.css';

// creates new component Aside
class Aside extends Component {
  // renders the component
  render() {
    // it will return the following element
    return (
        // will return imported Aside, adds prop className Aside
        <aside className="Aside">
        </aside>

    );
  }
}

// exports single Aside component
export default Aside;
