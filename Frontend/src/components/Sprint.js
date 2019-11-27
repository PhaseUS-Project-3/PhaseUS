import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import axios from 'axios'
 import Button from '@material-ui/core/Button';

class Sprint extends Component {
  constructor(props) {
    super(props);
 
        this.state = {
  
            sprinttname: '',
        }
        this.mySubmitHandler = this.mySubmitHandler.bind(this);

      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        
        console.log(event.target.children[3].value)
        console.log(this)
        this.setState({
          sprinttname : event.target.children[3].value
        })
        // axios.post("localhost:5001/projects/"+projectid+"/sprints/newsprint", {name: event.target.children[3].value, sprints: []}).then(res => {
          // console.log(res)
        // })

      }
      componentDidMount(){
        // axios.get("localhost:5001/projects/"+projectid+"/sprints").then(res => console.log(res))
      }
      componentDidUpdate(){
        // axios.get("localhost:5001/projects/"+projectid+"/sprints").then(res => console.log(res))
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
           />
    
        
        <Button className="waves-effect btn-large" id="colorButton" type="submit" name="action">
          <Link to="/createsprint">
            Create Sprint
           </Link>
        </Button> 
        <br/>
            <br/>
     
          
            <Button className="waves-effect btn-small"
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