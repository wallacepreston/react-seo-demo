import React from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

import {login} from '../reducers'


class LocalLoginForm extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
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
  handleSubmit (event) {
    event.preventDefault()
    try {
      this.props.login(this.state)
    } catch (err){
      console.log(err)
    }
    this.setState({
      email: '',
      password: ''
    })
    this.props.history.push('/home')
  }
  render () {
    return (
    <form onSubmit={this.handleSubmit}>
      <div className='flex column'>
        <div className='flex column m1'>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='input' placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
        </div>
        <div className='flex column m1'>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' className='input' placeholder="Enter password" value={this.state.password} onChange={this.handleChange} />
        </div>
        <div className='m1'>
        <button type="submit" className="btn btn-primary">Submit</button>

        </div>
      </div>
    </form>
  )}
}

const mapDispatchToProps = dispatch => ({
  login: (userData) => dispatch(login(userData))
})

const LocalLoginFormContainer = withRouter(connect(null, mapDispatchToProps)(LocalLoginForm))

export default LocalLoginFormContainer
