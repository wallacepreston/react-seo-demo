import React from 'react'

const OauthLoginForm = (props) => {
  const provider = props.provider
  const providerName = props.provider.slice(0,1).toUpperCase() + props.provider.slice(1)
  let providerColor
  if(provider === 'facebook'){
    providerColor = 'info'
  } else {
    providerColor = 'danger'
  } 
  return (
    <form method='get' action={`/auth/${provider}`}>
      <button type='submit' className={`btn btn-${providerColor}`}>Login with {providerName}</button>
    </form>
  )
}

export default OauthLoginForm
