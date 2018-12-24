import 'regenerator-runtime/runtime';
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

import {getMe} from '../reducers'
import Header from './header'
import Login from './login'
import UserPage from './user-page'


class Root extends React.Component {
  constructor(){
    super()
  }
  componentDidMount () {
    this.props.getMe()
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
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getMe: () => dispatch(getMe())
})

const RootWithRouter = withRouter(connect(null, mapDispatchToProps)(Root))

export default RootWithRouter
