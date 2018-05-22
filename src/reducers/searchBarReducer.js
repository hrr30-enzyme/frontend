import { SEARCH } from '../actions/types'

const initialState = {}

const searchBar = (state = initialState, action) => {
  switch(action.type) {
    case `${SEARCH}_FULFILLED`:
    return {
      ...state,
      results: action.payload.data
    };

    case `${SEARCH}_REJECTED`:
    return {
      ...state,
      error: action.payload.error
    };

    default:
    return state;
  }
}

export default searchBar