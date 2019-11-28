import React, { Component } from 'react'
import axios from 'axios'

import { getToken, setToken, logout} from '../services/auth.js'

let header = {
  headers :{
    "Content-Type" : "application/json",
    "authorization" : `Bearer ${getToken()}`
  }
}

class ShowProject extends Component {
	constructor(props) {
		super(props);
	 
			this.state = {
				rows: []
			}
		}
	handleDeleteRow(i) {
		let rows = [this.state.rows]
		rows.splice(i, 1)
		this.setState({ 
		  rows: rows
		})
	  }

	  handleDel = (e) => {
		let id = e.target.getAttribute('data-id')
		let pId = this.props.projects[id]._id
		this.props.projects.splice(id, 1)
		console.log(e)
        axios.delete("http://localhost:5000/projects/"+pId)
      }
	  componentDidMount(){
		  axios.get("http://localhost:5000/projects", header).then(res => {
          console.log(res.data)

          this.setState({
            rows: res.data.projects
            
          })
        })
        }

    
	
	
	render() {
        console.log(this.props.projects)
        return (

          
            <div id="bodywrap">
 
	<table class="table table-striped table-hover user-list fixed-header">
		<thead>
			<th><div>	Project Name</div></th>
		</thead>

		<tbody>
		{this.props.projects? this.props.projects.map((row,i) => 
			<tr key={i}>
				<td> {row.name} <button id="button1" data-id={i} onClick={this.handleDel}>Delete</button>
				</td>

			</tr>
			): ""}

		
 		</tbody>
	</table>

 </div>
 				
 				       
        )
    
	}
		}
	
export default ShowProject