import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ShowProject from './ShowProject'
import { getToken, setToken, logout} from '../services/auth.js'

let header = {
  headers :{
    "Content-Type" : "application/json",
    "authorization" : `Bearer ${getToken()}`
  }
}
class Project extends Component {
  constructor() {
    super();
        this.state = {
         name: '',
         projects: []
        }
        this.mySubmitHandler = this.mySubmitHandler.bind(this);
      }
      mySubmitHandler = async (event) => {
        
        event.preventDefault();
        
        console.log(event.target.children[3].value)
        console.log(this)
        this.setState({
          projectname : event.target.children[3].value
        })
        await axios.post("http://localhost:5000/projects/newproject", {name: event.target.children[3].value, sprints: []}, header).then(res => {
          console.log(res)
          this.props.history.push(`/sprint/`+res.data._id)
        }).catch(e => console.log(e))

      }
      componentDidMount(){
        console.log(this.props.user)
        if(this.props.user){
          axios.get("http://localhost:5000/projects", header).then(res => {
          console.log(res.data)

          this.setState({
            name: this.props.user.projects.name,
            projects: res.data.projects
            
          })
        })
        }

      }

      // }
      // componentDidUpdate(){
      //   axios.get("localhost:5000/projects").then(res => console.log(res))
      // }

  render() {
    console.log(this.state.projectname);
    if(this.state.projectname !== ''){
    //   <Link to="/sprint">
    //  </Link>
    }
    return (
 <div className="container">
   
   <div className="col-sm-8 mx-auto">

     <form  onSubmit={this.mySubmitHandler }>
            <br/><br/>
          <p>Project Name:</p>
          <input
            type='text'
            name='projectname'
             />
        <button className="waves-effect btn-large" id="colorButton" type="submit">
            Create Project
         </button> 
         </form>
         <br/><br/>
         <br/><br/>
         <button className="waves-effect btn-large" id="colorButton" type="submit" >
          
            Back
           
        </button> 
        <ShowProject />
    </div>
 </div>

    )
  }
}

export default Project