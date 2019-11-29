import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import { getToken, setToken, logout} from './services/auth.js'
import Login from './components/Login';
// import SprintData from './Components/SprintData'
import TaskData from './components/TaskData'

import Register from './components/Register';
import Landing from './components/Landing';
import ProjectPhase from './components/ProjectPhase';
import Sprint from './components/Sprint';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Profile from './components/Profile'
import NotFoundPage from './components/NotFoundPage';


import { decode }  from 'jsonwebtoken'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

let parseToken= (jwtToken) => {
  const decodedJwt = decode(jwtToken)
  console.log(decodedJwt);
  return decodedJwt
}
/*------
  Since JWT requires token to be passed in header
  Save an object for header so I dont have to repeat this code
----*/
let header = {
  headers :{
    "Content-Type" : "application/json",
    "Authorization" : `Bearer ${getToken()}`
  }
}

export default class App extends React.Component {
  //  componentDidMount = async () =>{
  //   const res = await axios.get('http://localhost:5000/projects');
  // }
  state = {
    user : null,
    errorMsg : '',
    isAuthenticated : false,
    hasError : false,
    currentProjectId: null
  }
  loginHandler = async(user) => {
    try{
      const loginStatus = await axios.post('http://localhost:5000/auth/login',user)
      if(loginStatus.data.token){
        await setToken(loginStatus.data.token)

        let data = {...this.state}
        data.user = loginStatus.data.user
        data.isAuthenticated = true
        data.hasError = false

        await this.setState(data)
        return true;
      }else{
          return false;
        }
    }catch(err){
      let data = {...this.state}
      data.hasError = true
      this.setState(data)
    }
  }
  projectHandler = async (projectId) =>{
    console.log(projectId)
    try{
      console.log(projectId)
      let data = {...this.state}
      data.currentProjectId = projectId;

      await this.setState(data)
      return true;

    }catch(err){
      let data = {...this.state}
      data.hasError = true
      this.setState(data)
    }
  }
  async componentDidMount(userToken=getToken()){
    if(userToken){
      console.log(userToken)
      const payload = parseToken(userToken)
      let data = {...this.state}
      data.user = payload
      data.isAuthenticated = true
      data.hasError = false

      await this.setState(data)
      return true
    }else{
      return false;
    }
  }


  render() {
          console.log(this.state)

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Landing} />   
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={(props) => <Login {...props} loginHandler={this.loginHandler} />} />

            {/* {this.state.user? <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state.user} />} />: ''} */}
            <Route exact path="/sprint/:id" render={(props) => <Sprint {...props}/>} />
            {/* <Route exact path="/sprintdata/:projectId/:sprintId" render={(props) => <SprintData {...props}/>} /> */}
            <Route exact path="/taskdata/:projectId/:sprintId" render={(props) => <TaskData {...props}/>} />

            <Route exact path="/projractphase/:projectId/:sprintId" render={(props) => <ProjectPhase {...props}/>} />

            {/* <Route exact path="/sprint" render={(props) =>this.state.currentProjectId ? <Sprint {...props} projectId={this.currentProjectId} /> : null } /> */}
            <Route exact path="/profile" render={(props) => this.state.user ? <Profile {...props} user={this.state.user} />: null} />

            <Route exact path="/projects" render={(props) => <Projects {...props} user={this.state.user} projectHandler={this.projectHandler}/>} />           
            {/* <Route exact path="/sprint" render={(props) => <Sprint {...props} user={this.state.user} />} />   */}

            <Route component={NotFoundPage} />
            {/* <Route exact path="/sprintdata"/> */}
          </Switch>
        </div>
      </Router>
    )
  }
}
