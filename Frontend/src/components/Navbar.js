import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {Navbar ,Nav} from 'react-bootstrap'
import { getToken, logout} from '../services/auth.js'


class Landing extends Component {
  
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }
  logOut(e) {
    e.preventDefault()
    logout()
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">

        <li className="nav-item">

          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )


    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExample10"
          aria-controls="navbarsExample10"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-center"
          id="navbarsExample10"
        >          <Navbar.Brand className="navbar-brand"> PhaseUs </Navbar.Brand> 

          <ul className="navbar-nav">

        
          <Nav className="Navbar">
            <li className="nav-item">
              
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>  
           
            </Nav> 
            </ul>
         

          {getToken()? userLink : loginRegLink}
          {console.log(getToken())}
        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)