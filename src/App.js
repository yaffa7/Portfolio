import React, { Component } from 'react';
import Nav from './components/Nav/Nav'
import LandingPage from './pages/LandingPage/LandingPage'
import ProjectPage from './pages/ProjectPage/ProjectPage'
import ResumePage from './pages/ResumePage/ResumePage'
import { Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav/>
        <Route path="/projects" component={ProjectPage}/>
        <Route path="/resume" component={ResumePage}/>
        <Route exact path="/" component={LandingPage}/>
      </div>
    );
  }
}

export default App;
