import React from 'react'
import LocalLoginForm from './local-login-form'
import OauthLoginForm from './oauth-login-form'

const Login = () => {
  return (
    <div>
      <h1>Please Log In:</h1>
        <div>
          <LocalLoginForm />
          <OauthLoginForm provider='google'/>
          {/* <OauthLoginForm provider='facebook'/> */}
        </div>
    </div>
  )
}

export default Login
