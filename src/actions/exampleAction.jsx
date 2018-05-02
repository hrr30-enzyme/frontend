import { EXAMPLE_DISPATCH } from './types.jsx'

export const exampleAction = () => {
  return (dispatch) => {
    dispatch({
      type: EXAMPLE_DISPATCH,
      payload: 'payload can be anything.'
    })
  }
};