import React, { Component } from 'react'
import './comp.css'
import '../App.css';
import {Form, Button} from 'react-bootstrap'
import Axios from 'axios'

export default class SprintData extends Component {
    constructor(props){
        super(props)
        this.back = this.back.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
        this.finalize = this.finalize.bind(this)

    }
    back(){
        this.props.history.push(`/sprint/`+this.props.match.params.projectId)
    }
    submitHandler(e){
        e.preventDefault()
        const name = e.target.firstChild.children[1].value
        const description = e.target.firstChild.children[4].value
        const projectId = this.props.match.params.projectId
        const sprintId = this.props.match.params.sprintId
        Axios.post("http://localhost:5000/projects/"+projectId+"/sprints/"+sprintId+"/task/newtask", {name, description})
        e.target.firstChild.children[1].value = ''
        e.target.firstChild.children[4].value = ''
    }
    finalize(e){
        e.preventDefault();
        const projectId = this.props.match.params.projectId
        const sprintId = this.props.match.params.sprintId
        this.props.history.push(`/projractphase/`+projectId+"/"+sprintId)
    }
    render() {
        return (
            <div className="form" >
    
               <Form onSubmit={this.submitHandler}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><h3>Task Name</h3></Form.Label>
                    <Form.Control  type="text" placeholder="Task name" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Label><h3>Description</h3></Form.Label>
                    <Form.Control type="text" placeholder="Description" />
                    <Form.Text className="text-muted">
                    </Form.Text>

                </Form.Group>


                <Button className="btnn" variant="primary" onClick={this.back}>
                    Back
                </Button>
                <Button className="btnn" variant="primary" type="submit">
                    Add Taks
                </Button>
                <Button className="btnn" variant="primary" onClick={this.finalize} type="submit">
                    Finalize
                </Button>

                </Form>
            </div>
        )
    }
}
