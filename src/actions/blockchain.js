import { WEB3_INITIALIZED, NO_METAMASK, ETH_VIEW, ETH_PAYABLE } from './actions/types'

/*
 *  dispatch as soon as web3 is initializes
 */

export const web3Initialized = (results) => {
  return {
    type: WEB3_INITIALIZED,
    payload: results
  }
}

/*
 * dispatch if user does not have metamask when loading site or tries to do something
 * that requires metmask.
 */

export const noMetaMask = (payload) => {
  return {
    type: NO_METAMASK,
    payload,
  }
}

/*
 * call functions are functions that do not cost any eth and just query for the current
 * state of the blockchain.
 * 
 * views will dispatch a pending right away, a _FULFILLED when fulfilled and
 * a _REJECTED on an error.
 * 
 */

const call = (method) => () => (dispatch, getState) => {
  const contract = getState().contract;
  
  if (contract === null) {
    return dispatch({type: NO_METAMASK});
  }
  dispatch({
    type: `${ETH_VIEW}_PENDING`,
    method
  });

  contract
    .methods[method]
    .call()
    .then((response) => dispatch({
      type: `${ETH_VIEW}_FULFILLED`,
      payload: {
        method,
        response
      }
    }))
    .catch((err) => dispatch({
      type: `${ETH_VIEW}_REJECTED`,
      payload: {
        method,
        err,
      }
    }));
}

/*
 * These view functions all come from teh QuestionFactory contract.
 */
export const getMinBounty = call('getMinBounty');
export const getDuration = call('getDuration');
export const getAnswerFee = call('getAnswerFee');
export const getQuestionsCount = call('getQuestionsCount');

/*
 * a send function is one that requires gas to run because it changes the blockchain
 * 
 * For some payable functions they must send a value in addition to the gas to be
 * added to the contracts bounty.
 * 
 * The function may require arguments which are ...args 
 * 
 * It will dispatch a _DISPATCHED as soon as it is called.
 * 
 * It will dispatch a _HASHED when it is hashed.
 * 
 * It will dispatch a _CONFIRMED when it is confirmed.
 * 
 * It will dispatch a _RECIEPT when it gets a reciept
 * 
 * It will dispatch a _REJECTED if there is an error.
 * 
 * TODO handle for when the user does not pay the min balance before
 * sending to the blockchain.
 */
const send = (method) => (value, ...args) => (dispatch, getState) => {
  const contract = getState().contract;
  
  if (contract === null) {
    return dispatch(NO_METAMASK);
  }

  dispatch({
    action: `${ETH_PAYABLE}_DISPATCHED`,
    payload: {
      method,
      valueSent: value,
      args,
    }
  })
  contract
    .methods[method](...args)
    .send({value})
    .on('transactionHash', (hash) => {
      dispatch({
        action: `${ETH_PAYABLE}_HASHED`,
        payload: {
          method,
          hash,
          valueSent: value,
          args,
        }
      })
    })
    .on('confirmation', (confirmationNumber, reciept) => {
      dispatch({
        action: `${ETH_PAYABLE}_CONFIRMED`,
        payload: {
          method,
          confirmationNumber,
          reciept,
          valueSent: value,
          args,
        }
      })
    })
    .on('reciept', (receipt) => {
      dispatch({
        action: `${ETH_PAYABLE}_RECIEPT`,
        payload: {
          method,
          receipt,
          valueSent: value,
          args,
        }
      })
    })
    .on('error', (err) => {
      dispatch({
        action: `${ETH_PAYABLE}_REJECTED`,
        payload: {
          method,
          valueSent: value,
          args,
          err,
        }
      })
    });
}

/*
 * the following payable functions exist for our contract.  upVote and
 * payoutWinner do not require a min value to be sent.  See the contract
 * documentation for more.
 */

export const upVote = send('upVote'); 
export const payoutWinner = send('payoutWinner');
export const createAnswer = send('createAnswer');
export const createQuestion = send('createQuestion');
// possible TODO contract.methods.myMethod.estimateGas estimates the gas a execution will take.


// possible TODO contract.events.eventName([options][, callback]) allows us to subscribe
// to events similar to a socket.  Might be a backend thing.

//

