import React, { Component } from 'react'
import {Select} from 'react'
import {Form, Button} from 'react-bootstrap'
import Axios from 'axios';

export default class SprintData extends Component {
    state ={
        users: [],
        selctedUsers: []
    }
    handleChange = (selectedUsers) => {
        this.setState({ selectedUsers });
      }
      componentDidMount(){
          Axios.get("http://localhost:5000/users").then( res => {
              this.setState({users: res.data})
          })
        }
      
    render() {
        
        return (
            <div>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Sprint Name</Form.Label>
                    <Form.Control type="text" placeholder="Sprint name" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </div>
        )
    }
}
