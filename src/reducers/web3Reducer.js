import { WEB3_INITIALIZED } from '../actions/types'
import { getContract } from '../web3'

const initialState = {
  web3: null,
  contract: null,
  status: 'Waiting',
}

const web3Reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case WEB3_INITIALIZED:
      const web3 = action.payload.web3Instance;
      return {
        ...state, 
        web3,
        contract: getContract(web3),
      };

    default:
      return state;
  }
}

export default web3Reducer
