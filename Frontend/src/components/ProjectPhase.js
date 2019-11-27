 import React, { Component } from 'react'
 import {Row, Col} from 'react-bootstrap'
 import dragula from 'dragula'; 
 import './comp.css';
import '../App.css';
import Axios from 'axios';
import { textAlign } from '@material-ui/system';
 export default class ProjectPhase extends Component {
   state ={
     tasks: []
   }
    componentDidMount () {
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        let center = document.getElementById('center');

        dragula([left, right, center]);
        const projectId = this.props.match.params.projectId
        const sprintId = this.props.match.params.sprintId
        Axios.get("http://localhost:5000/projects/"+projectId+"/sprints/"+sprintId+"/task/").then(res =>{
          this.setState({tasks: res.data})
          console.log(res.data.tasks)
    })
      }
 
      render () {
        return (
         <div className="conti">
          <Row className="container">
            <Col id="left" className=" container">
            <h3>Tasks</h3>
               {this.state.tasks.tasks?this.state.tasks.tasks.map(task => <Card  body={<div className="crd"><h3>{task.name}</h3><p>{task.description}</p></div>}/>):''}
            </Col>
            <Col id="center" className="container">
            <h3>Compeleted</h3>        
            </Col>
        
            <Col id="right" className="container">
            <h3>In prograss</h3>             
            </Col>
          </Row>
          </div>

        );
      }
    }
    
    class Card extends React.Component {
      constructor (props) {
        super(props);
      }
      
      render () {
        return (
          <div className="card">
            <div className="card-header">         
            </div>
            <div className="card-body">
              <p>{this.props.body}</p>
            </div>
          </div>
        );
      }
    }