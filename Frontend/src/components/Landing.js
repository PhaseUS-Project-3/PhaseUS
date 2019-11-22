import React, { Component } from 'react'
 import { Link } from 'react-router-dom'

class Landing extends Component {
  render() {
    return (
      <div className="container">
   
            <div className="col-sm-8 mx-auto">
          <button class="waves-effect btn-large" id="colorButton" type="submit" name="action">
          <Link to="/CreateProject">
            Create Project
           </Link>
          </button> 
         
        </div>
      </div>
    )
  }
}

export default Landing
