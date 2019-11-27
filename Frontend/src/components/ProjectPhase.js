 import React, { Component } from 'react'
 import {Row, Col} from 'react-bootstrap'
 import dragula from 'dragula'; 
 export default class ProjectPhase extends Component {
    componentDidMount () {
        let left = document.getElementById('left');
        let right = document.getElementById('right');
        let center = document.getElementById('center');

        dragula([left, right, center]);
      }
 
      render () {
        return (
          <Row className="container">
            <Col id="left" className=" container">
            <h3>Tasks</h3>

               <Card body=""/>
               <Card body=""/>
               <Card body=""/>  
               <Card body=""/>
              
            
            </Col>
            <Col id="center" className="container">
            <h3>Compeleted</h3>

                <Card body=""/>
                <Card body=""/>          
                <Card body=""/>
            
              
            </Col>

            <Col id="right" className="container">
            <h3>In prograss</h3>

                <Card body=""/>
                <Card body=""/>          
                <Card body=""/>
            
              
            </Col>
            
          </Row>

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