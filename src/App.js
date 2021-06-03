// imports component functionality from react
import React, { Component } from 'react';
// imports app styling
import './App.css';
// imports header component from the header file
import Header from './Header';
// imports sectionMain component from the sectionMain file
import SectionMain from './SectionMain';
// imports aside component from the aside file
import Aside from './Aside';
// imports footer component from the footer file
import Footer from './Footer';

// creates App as a new component
class App extends Component {

  // Calls the render function
  render() {
    // it will render the following html
    return (
      // a div with class 'App'
      <div className="App">
        // imported header, given props backColor 'green' width '50%'
        <Header backColor="green" width="50%"></Header>
        // imported sectionMain will go here
        <SectionMain></SectionMain>
        // imported aside will go here
        <Aside></Aside>
        // imported footer will go here
        <Footer></Footer>
      </div>
    );
  }
}

// export a single value, which is class App 
export default App;
