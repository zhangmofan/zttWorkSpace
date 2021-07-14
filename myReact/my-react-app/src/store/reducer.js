import {
  ADD_NUMBER,
  SUB_NUMBER,
  REDUCE_NUMBER
} from './constants.js'

const defaultState = {
  counter: 0
}

function reducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case REDUCE_NUMBER:
      return {...state,  counter:state.counter - action.num}
    default:
      return state
  }
}

export default reducer
