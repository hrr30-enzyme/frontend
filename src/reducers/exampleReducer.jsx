import { EXAMPLE_DISPATCH } from '../actions/types.jsx'

const initialState = [];

const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case EXAMPLE_DISPATCH:
      return {
        ...state, 
        newProperty: 'make sure you never modifiy state!'
      };
    
    default:
      return state;
  }
}

export default exampleReducer