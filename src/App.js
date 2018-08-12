import React, { Component } from 'react';
import Nav from './components/nav'
import LandingPage from './components/landingpage'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav title="Hello from nav!!"/>
        <LandingPage/>
      </div>
    );
  }
}

export default App;
