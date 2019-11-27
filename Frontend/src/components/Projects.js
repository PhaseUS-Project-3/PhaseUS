import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Project extends Component {
  constructor() {
    super();
        this.state = {
         projectname: ''
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
        await axios.post("http://localhost:5000/projects/newproject", {name: event.target.children[3].value, sprints: []}).then(res => {
          console.log(res)
        }).catch(e => console.log(e))

      }
      componentDidMount(){
        console.log(this.props.user)
        if(this.props.user){
          this.setState({
            projectname: this.props.user.data.projects.name
          })
        }
      }

      //   axios.get("localhost:5000/projects").then(res => console.log(res))
      // }
      // componentDidUpdate(){
      //   axios.get("localhost:5000/projects").then(res => console.log(res))
      // }

  render() {
    console.log(this.state.projectname);
    if(this.state.projecname !== ''){
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
          {/* <Link to="/sprint">
            Create Project
           </Link> */}
         </button> 
         <br/><br/>
         <br/><br/>
         <button className="waves-effect btn-large" id="colorButton" type="submit" >
          {/* <Link to="/Sprint">
            Sprints
           </Link> */}
        </button> 
     </form>
          <h1>{this.state.projectname}</h1>
    </div>
 </div>

    )
  }
}

export default Project