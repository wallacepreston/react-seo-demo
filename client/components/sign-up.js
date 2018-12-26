import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {signup} from '../reducers'

class SignUp extends React.Component {
  constructor () {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageURL: '',
      password: '' 
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
  }
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  async handleSubmit (event) {
    event.preventDefault()
    try {
      await this.props.signup(this.state)
    }
    catch (error) {
      console.error(error)
    }
    this.props.history.push('/home')
  }
  // eslint-disable-next-line complexity
  render () {
    return (
      <div>
        <h2>Sign Up:</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="container-fluid justify-content-center">
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="firstName">First Name: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="firstName" placeholder="Enter student first name" value={this.state.firstName} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.firstName === '' ? <span className="alert alert-warning" role="alert">Required</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="lastName">Last Name: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="lastName" placeholder="Enter student last name" value={this.state.lastName} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.lastName === '' ? <span className="alert alert-warning" role="alert">Required</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="email">Email: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="email" placeholder="Enter student email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.email === '' ? <span className="alert alert-warning" role="alert">Required!</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="imageURL">Image URL: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="imageURL" placeholder="Enter student image URL" value={this.state.imageURL} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.imageURL === '' ? <span className="note">We'll choose one for you if you don't.</span> : ''}
              </div>
            </div>
            <div className="row h3">
              <div className="col text-center">
                <label htmlFor="password">Password: </label>
              </div>
              <div className="col text-center">
                <input type="text" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="col text-center">
                {this.state.password === '' ? <span className="alert alert-warning" role="alert">Required</span> : ''}
              </div>
            </div>
          </div>
            <button type="submit" className="btn btn-primary">Sign Up!</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user))
})

const SignUpContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))

export default SignUpContainer
