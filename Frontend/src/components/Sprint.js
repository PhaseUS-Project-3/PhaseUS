import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import Button from '@material-ui/core/Button';

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
    
        
        <Button class="waves-effect btn-large" id="colorButton" type="submit" name="action">
          <Link to="/createsprint">
            Create Sprint
           </Link>
        </Button> 
        <br/>
            <br/>
     
          
            <Button class="waves-effect btn-small"
                id="backButton"         
                variant="contained"
                name="action">   
                <Link to="/Project">
                    Projects
                </Link>   
            </Button>
    </form>
         
  </div>
 </div>
    )
  }
}

export default Sprint
