import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import CreateSprint from './components/CreateSprint'
import Project from './components/Project'
import ProjectPhase from './components/ProjectPhase'

import SprintS from './components/SprintS'
import Sprint from './components/Sprint'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/CreateSprint" component={CreateSprint} />
            <Route exact path="/Project" component={Project} />
            <Route exact path="/ProjectPhase" component={ProjectPhase} />
            <Route exact path="/sprint" component={SprintS} />
            <Route exact path="/Sprint" component={Sprint} />



          </div>
        </div>
 
      </Router>
     
    
    )
    
    }
}

export default App
