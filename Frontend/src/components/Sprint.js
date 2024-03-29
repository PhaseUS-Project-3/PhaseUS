import React, { Component } from 'react'
 import { Link } from 'react-router-dom'
 import axios from 'axios'
 import Button from '@material-ui/core/Button';
 import { getToken, setToken, logout} from '../services/auth.js'

 let header = {
  headers :{
    "Content-Type" : "application/json",
    "authorization" : `Bearer ${getToken()}`
  }
}
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
        console.log("in handler")
        const projectId = this.props.match.params.id
        const name =  event.target.children[3].value
        axios.post("/api/projects/"+projectId+"/sprints/newsprint", {name: name}, header).then(res => {
          console.log(res)
          this.props.history.push(`/taskdata/`+projectId+"/"+res.data._id)
        })

      }
      componentDidMount(){
        const projectId = this.props.match.params.id
        axios.get("/api/projects/"+projectId+"/sprints",header).then(res => console.log(res));
      }
      componentDidUpdate(){
        // axios.get("localhost:5001/projects/"+projectid+"/sprints").then(res => console.log(res))
      }


  render() {
    console.log(this.props.projectId)
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
            Create Sprint
        </Button> 
        <br/>
            <br/>
     
          
            <Button className="waves-effect btn-small"
                id="backButton"         
                variant="contained"
                name="action">   
                <Link to="/projects">
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