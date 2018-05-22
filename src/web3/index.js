import store from '../store'
import Web3 from 'web3'
import { abi, address } from './contractAbi'

import { web3Initialized, noMetaMask } from '../actions/blockchain'

let getWeb3 = new Promise(function(resolve, reject) {

  window.addEventListener('load', function(dispatch) {
    var results
    var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {

      web3 = new Web3(web3.currentProvider)

      results = {
        web3Instance: web3
      }

      web3.eth.defaultAccount = web3.eth.accounts[0];

      resolve(store.dispatch(web3Initialized(results)))
    } else {

      resolve(store.dispatch(noMetaMask(results)));
    }
  })
})

export const getContract = (web3) => {
  let contract = web3.eth.Contract(abi);
  contract.options.address = address;
  return contract;
}

export default getWeb3
