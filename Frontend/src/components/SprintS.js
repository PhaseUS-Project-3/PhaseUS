import React, { Component } from 'react'
 
export default class SprintS extends Component {

  constructor(props) {
    super(props);
    this.state = {
      remove: true,
    }
   }
  

 

    render() {
		const pnames = ["p1", "p2", "p3", "p3"]

        return (
            <div>
            <div id="bodywrap">
<div class="row">
<div class="large-10 columns">
 
	<table class="table table-striped table-hover user-list fixed-header">
		<thead>
			<th><div>Sprint Name</div></th>
  			<th><div></div></th>
		</thead>
		<tbody>
			<tr>
				{pnames.map(e => <div>
				<td>{e}</td>
 				<td class="text-right">
         <button class="flat-butt flat-primary-butt">Edit</button>
 <button class="flat-butt flat-danger-butt">Delete</button>				</td></div>)}
			</tr>
					
			
 		</tbody>
	</table>
	</div>
</div>
</div>
</div>
         
        )
    }
}