import React, { Component } from 'react'
 import { Link } from 'react-router-dom'

class Sprint extends Component {
  constructor(props) {
    super(props);
 
        this.state = {
  
            sprinttname: '',
        }
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
   
      }

  render() {
    return (
  <div className="container">
     <div className="col-sm-8 mx-auto">

   <form  onSubmit={this.mySubmitHandler}>
             <br/> <br/>
          <p>Sprint Name:</p>
          <input
            type='text'
            name='sprinttname'
            onChange={this.myChangeHandler}/>
 
        <button class="waves-effect btn-large" id="colorButton" type="submit" name="action">
          <Link to="/createsprint">
            Create Sprint
           </Link>
        </button> 
    </form>
         
  </div>
 </div>
    )
  }
}

export default Sprint
