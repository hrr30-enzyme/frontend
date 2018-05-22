import { WEB3_INITIALIZED, NO_METAMASK } from '../actions/types'

export const web3Initialized = (results) => {
  return {
    type: WEB3_INITIALIZED,
    payload: results
  }
}

export const noMetaMask = () => {
  return {
    type: NO_METAMASK
  }
}

export const reduxThunk = (arg) => (dispatch, getState) => {
  
}