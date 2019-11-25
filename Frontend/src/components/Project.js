import React, { Component } from 'react'
 import { Link } from 'react-router-dom'

class Project extends Component {
  constructor(props) {
    super(props);
 
        this.state = {
  
         projectname: '',
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
            <br/><br/>
          <p>Project Name:</p>
          <input
            type='text'
            name='projectname'
            onChange={this.myChangeHandler}/>
 
        <button class="waves-effect btn-large" id="colorButton" type="submit" name="action">
          <Link to="/sprint">
            Create Project
           </Link>
         </button> 
         <br/><br/>
         <br/><br/>
         <button class="waves-effect btn-large" id="colorButton" type="submit" name="action">
          <Link to="/Sprint">
            Sprints
           </Link>
        </button> 
     </form>

    </div>
 </div>

    )
  }
}

export default Project
