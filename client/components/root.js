// import 'regenerator-runtime/runtime';
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {getMe} from '../reducers'
import Header from './header'
import Login from './login'
import UserPage from './user-page'
import SignUp from './sign-up'


class Root extends React.Component {
  constructor(){
    super()
  }
  async componentDidMount () {
    await this.props.getMe()
    if (this.props.user) {
      this.props.history.push('/home')
    }
  }

  render () {
    return (
      <div>
        <Header />
        <div className="justify-content-center">
          <div className="col text-center">
            <Switch>
              <Route exact path='/home' component={UserPage} />
              <Route exact path='/' component={Login} />
              <Route exact path='/signup' component={SignUp} />
            </Switch>
          </div>
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

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMe())
})

const RootWithRouter = withRouter(connect(mapStateToProps, mapDispatchToProps)(Root))

export default RootWithRouter
