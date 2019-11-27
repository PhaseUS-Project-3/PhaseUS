import React, { Component } from 'react'



class ShowProject extends Component {
	constructor(props) {
		super(props);
	 
			this.state = {
				rows: ["p1", "p2", "p3", "p3"]
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
		let curState = {...this.state} 
		let id = e.target.getAttribute('data-id')

		curState.rows.splice(id, 1)
		console.log(curState)
		this.setState(curState)
	  }
	
	
	render() {
		const pnames = ["p1", "p2", "p3", "p3"]
		let {rows} = this.state 
		console.log(rows)
        return (

          
            <div id="bodywrap">
 
	<table class="table table-striped table-hover user-list fixed-header">
		<thead>
			<th><div>	Project Name</div></th>
		</thead>

		<tbody>
		{rows.map((row,i) => 
			<tr key={i}>
				<td> {row} <button id="button1" data-id={i} onClick={this.handleDel}>Delete</button>
				
      
				 <button id ="button2">  Edit</button></td>

			</tr>
			)}

		
 		</tbody>
	</table>

 </div>
 				
 				       
        )
    
	}
		}
	
export default ShowProject