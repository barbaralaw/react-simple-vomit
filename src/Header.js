// imports components from react
import React, { Component } from 'react';
// imports header styling
import './Header.css';

// creates new component header
class Header extends Component {
  // renders the following
  render() {
    // creates style variable to be passed to header
    const style = {
      // sets width to whatever is set in app.js
      width: this.props.width,
      // sets background color to whatever is set in app.js
      backgroundColor: this.props.backColor
    }
    // will return the following html
    return (
        // header, with styles as defined above and classname header-main
        <header style={style} className="Header-main">
        </header>

    );
  }
}

// exports single component header
export default Header;


//document.querySelector("header").style.backgroundColor = "red"
