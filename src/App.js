import React, { Component } from 'react';
import Nav from './components/nav'
import LandingPage from './components/landingpage'
import Projects from './components/projects'
import Resume from './components/resume'
import { Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Route path="/projects" component={Projects}/>
        <Route path="/resume" component={Resume}/>
        <Route exact path="/" component={LandingPage}/>
      </div>
    );
  }
}

export default App;
