import {createStore, applyMiddleware, compose} from 'redux'
import axios from 'axios'
import reducer from './reducers'
import loggerMiddleware from 'redux-logger' // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

// WITH ADVANCED REDUX DEV TOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer, /* preloadedState, */
  composeEnhancers(
    applyMiddleware(thunkMiddleware.withExtraArgument({axios}),
    loggerMiddleware)
  )
)

export default store
