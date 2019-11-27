import React, { Component } from 'react'
 
class Landing extends Component {
  render() {
    return (
      <div className="container">
   <br/>
   <br/>
 <header>
	<section id="Overview">
  <div className="container">
    <div className="row">
      <div className="col text-center">
         <h4>
        <h1>PhaseUs</h1> lets you work more collaboratively and get more done.<br/>
PhasesUs’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.<br/><br/></h4>
       </div>
    </div>
  </div>
		 </section>
</header>
 		<section id="Cats">
<div className="section first-section">
  <div className="container">
    <div className="row">
		<div className="row align-items-center justify-content-around">
         <div className="col-12 col-lg-5">

			<img className="img-fluid" src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Cat with Attitude"/>
      </div>

        <div className="col-12 col-lg-5">
        <h2>Work with any team</h2>
        <p>Whether it’s for work, a side project or even the next family vacation, PhaseUs helps your team stay organized.
</p>

  
      </div>
    </div>
  </div>
</div>
    </div>
 </section>
 <center>
 	<section id="Diet">
 <div className="section second-section">
  <div className="container">
    <div className="row justify-content-center text-center">
      <div className="col-12 col-sm-10 col-md-8 col-lg-5">
        <h2>Steps in workflow</h2>
 			</div>
		  </div>
    </div>
	 </div>
	 <div className="section second-section">
  <div className="container">
    <div className="row">
   
  <div className="col-12 col-sm-6 col-lg-3">
				<img src="https://image.flaticon.com/icons/svg/432/432406.svg" alt=" "/>
    <h3>Tasks</h3>
 				
			 </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img src="https://image.flaticon.com/icons/svg/432/432380.svg" alt=" "/>
    <h3>In Progress</h3>
   </div>
  <div className="col-12 col-sm-6 col-lg-3">
    <img src="https://image.flaticon.com/icons/svg/432/432445.svg" alt=" "/>
    <h3>Completed</h3>
   </div>
  
</div>
	  </div>
		 </div>
		</section>
    </center>
 
	 
<footer className="text-center">
  <small>Made by <a href="https://twitter.com/thorolas_lily"  class="contact-details">.
</a>with &hearts; </small>
</footer>
     
      </div>
    )
  }
}

export default Landing