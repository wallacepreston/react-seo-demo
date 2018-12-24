import axios from 'axios'
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

// INITIAL STATE
const initialState = {
  user: {}
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
