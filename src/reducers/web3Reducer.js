import { WEB3_INITIALIZED } from '../actions/types'
import { getContract } from '../web3'

const initialState = {
  web3Instance: null,
  contract: null,
  status: 'Waiting',
}

const web3Reducer = (state = initialState, action) => {
  
  switch (action.type) {
    case WEB3_INITIALIZED:
      const web3Instance = action.payload.web3Instance;
      return {
        ...state, 
        web3Instance,
        contract: getContract(web3Instance)
      };

    default:
      return state;
  }
}

export default web3Reducer
