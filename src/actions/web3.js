import { 
  WEB3_INITIALIZED, 
  NO_METAMASK,  
  GET_MIN_BOUNTY,
  GET_DURATION,
  GET_ANSWER_FEE,
  GET_QUESTIONS_COUNT,
  UP_VOTE,
  PAYOUT_WINNER,
  CREATE_ANSWER,
  CREATE_QUESTION,
} from './types'

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

const call = (actionName) => (method) => () => (dispatch, getState) => {
  const contract = getState().contract;
  
  if (contract === null) {
    return dispatch({type: NO_METAMASK});
  }
  dispatch({
    type: `${actionName}_PENDING`,
    method
  });

  contract
    .methods[method]
    .call()
    .then((response) => dispatch({
      type: `${actionName}_FULFILLED`,
      payload: {
        method,
        response
      }
    }))
    .catch((err) => dispatch({
      type: `${actionName}_REJECTED`,
      payload: {
        method,
        err,
      }
    }));
}

/*
 * These view functions all come from teh QuestionFactory contract.
 */
export const getMinBounty = call(GET_MIN_BOUNTY)('getMinBounty');
export const getDuration = call(GET_DURATION)('getDuration');
export const getAnswerFee = call(GET_ANSWER_FEE)('getAnswerFee');
export const getQuestionsCount = call(GET_QUESTIONS_COUNT)('getQuestionsCount');

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
const send = (actionName) => (method) => (value, ...args) => (dispatch, getState) => {
  const contract = getState().contract;
  
  if (contract === null) {
    return dispatch(NO_METAMASK);
  }

  dispatch({
    action: `${actionName}_PENDING`,
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
        action: `${actionName}_HASHED`,
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
        action: `${actionName}_CONFIRMED`,
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
        action: `${actionName}_RECIEPT`,
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
        action: `${actionName}_REJECTED`,
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

export const upVote = send(UP_VOTE)('upVote'); 
export const payoutWinner = send(PAYOUT_WINNER)('payoutWinner');
export const createAnswer = send(CREATE_ANSWER)('createAnswer');
export const createQuestion = send(CREATE_QUESTION)('createQuestion');
// possible TODO contract.methods.myMethod.estimateGas estimates the gas a execution will take.


// possible TODO contract.events.eventName([options][, callback]) allows us to subscribe
// to events similar to a socket.  Might be a backend thing.

// the send method should be used on backend to approve users to be able to vote.

