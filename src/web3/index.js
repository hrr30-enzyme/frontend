import store from '../store'
import Web3 from 'web3'
import { abi, address } from './contractAbi'

import { web3Initialized, noMetaMask } from '../actions/web3'

let getWeb3 = new Promise((resolve, reject) => {
  window.addEventListener('load', async (dispatch) => {
    var results
    var web3 = window.web3

    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider)
      results = {
        web3Instance: web3,
        account: await web3.eth.getAccounts((err, accs) => accs[0])
      }
      resolve(store.dispatch(web3Initialized(results)))
    } else {
      resolve(store.dispatch(noMetaMask('onLoad')))
    }
  })
})

export const getContract = (web3) => {
  let contract = new web3.eth.Contract(abi)
  contract.options.address = address
  return contract
}

export default getWeb3
