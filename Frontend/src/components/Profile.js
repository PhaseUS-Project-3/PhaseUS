import React, { Component } from 'react'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      email: '',
      errors: {}
    }
  }

  componentDidMount() {
    console.log(this.props.user)
    if(this.props.user){
      this.setState({
        username: this.props.user.username,
        email: this.props.user.email
      })
    }else{
      this.props.history.push(`/`)
    }
}
  

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Username</td>
                <td>{this.state.username}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile