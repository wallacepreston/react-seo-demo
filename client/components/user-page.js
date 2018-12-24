import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../reducers'

class UserPage extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.props.logout();
    this.props.history.push('/')
  }
  render() {
    const {user} = this.props
    if (!user.id) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <div className='flex'>
          <img src={user.imageURL} />
          <h1>Welcome back {(user.email || user.name)}!</h1>
        </div>
        <div>
        <button type="button" className="btn btn-danger" onClick={this.handleClick}>Log Out</button>
        </div>
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
  logout: () => dispatch(logout())
})
export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
