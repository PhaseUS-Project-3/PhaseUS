import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

import { getToken, setToken, logout} from './services/auth.js'
import Login from './Components/Login';
import Register from './Components/Register';
import Landing from './Components/Landing';
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile'
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
    hasError : false
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
          console.log(this.state.user)

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" render={(props) => <Login {...props} loginHandler={this.loginHandler} />} />

            {this.state.user? <Route exact path="/profiles" render={(props) => <Profile {...props} user={this.state.user} />} />: ''}
            <Route path="/projects" render={(props) => <Projects {...props} user={this.state.user} />} />
          </div>
          </Switch>
        </div>
      </Router>
    )
  }
}
