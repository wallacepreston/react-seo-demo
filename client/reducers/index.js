import axios from 'axios'

// INITIAL STATE
const initialState = {
  user: {}
}
// ACTION TYPES
const GOT_USER = 'GOT_USER'

// ACTION CREATORS
const gotMe = (user) => ({
  type: GOT_USER,
  user
})

// THUNK CREATORS
export const getMe = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/auth/me');
    dispatch(gotMe(data));
  }
}

export const login = (formData) => {
  return async (dispatch) => {
    const {data} = await axios.put('/auth/login', formData)
    dispatch(gotMe(data));
  }
}

export const logout = () => {
  return async (dispatch) => {
    await axios.delete('/auth/logout')
    dispatch(gotMe(initialState.user))
  }
}

export const signup = (user) => {
  return async (dispatch) => {
    const {data} = await axios.post('/auth/signup', user);
    dispatch(gotMe(data));
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return {
        ...state,
        user: action.user
      }
    default:
      return state
  }
}
export default reducer
