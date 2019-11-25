import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
export default class SprintS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remove: true,
    }
    // this.mySprint = this.mySprint.bind(this);
  }
  


// mySprint =({onRemovemySprint}) => ({
    
//   })

    render() {
        return (
            <div>
            <div id="bodywrap">
<div class="row">
<div class="large-10 columns">
  <div class="scroll-window-wrapper">
 
	<div class="scroll-window">
	<table class="table table-striped table-hover user-list fixed-header">
		<thead>
			<th><div>Sprint Name</div></th>
  			<th><div></div></th>
		</thead>
		<tbody>
			<tr>
				<td>Michael Jones</td>
 				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
		 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
	 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
		 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
			 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
		 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
 
				<td class="text-right">
					<button class="button tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
			<tr>
				<td>Michael Jones</td>
 
				<td class="text-right">
					<button class="button alrt tiny">Edit</button>
					<button class="button alert tiny">Delete</button>			
				</td>
			</tr>
 		</tbody>
	</table>
	</div>
</div>
</div>
</div>
</div>
         
            </div>
        )
    }
}
