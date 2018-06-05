import {
  WEB3_INITIALIZED,
  NO_METAMASK,
  GET_QUESTION_COUNT,
  GET_QUESTION_ID,
  UP_VOTE,
  PAYOUT,
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
  const contract = getState().web3.contract

  if (contract === null) {
    return dispatch({type: NO_METAMASK})
  }

  dispatch({
    type: `${actionName}_PENDING`,
    method
  })

  contract
    .methods[method]()
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
    }))
}

/*
 * These view functions all come from teh QuestionFactory contract.
 */

const getQuestionCount = call(GET_QUESTION_COUNT)('getQuestionCount')
const getQuestionId = call(GET_QUESTION_ID)('getQuestionId')


window.getQuestionCount = getQuestionCount
window.getQuestionId = getQuestionId

export { getQuestionCount }

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

const send = (actionName) => (isPayable) => (method) => (value, ...args) => async (dispatch, getState) => {
  const contract = getState().web3.contract
  console.log('\n\n\n\nactionname\n\n\n\n',actionName)

  const addresses = await getState().web3.web3.eth.getAccounts()
  dispatch({
    type: `${actionName}_PENDING`,
    payload: {
      method,
      valueSent: value,
      args,
    }
  })

  console.log('contract', contract)

  if (!addresses[0] || contract === null) {
    return dispatch({type: NO_METAMASK})
  }

  value = isPayable ? {value} : {}

  contract
    .methods[method](...args)
    .send({from: addresses[0], ...value})
    .on('transactionHash', (hash) => {
      dispatch({
        type: `${actionName}_HASHED`,
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
        type: `${actionName}_CONFIRMED`,
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
        type: `${actionName}_RECIEPT`,
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
        type: `${actionName}_REJECTED`,
        payload: {
          method,
          valueSent: value,
          args,
          err,
        }
      })
    })
}

/*
 * the following payable functions exist for our contract.  upVote and
 * payoutWinner do not require a min value to be sent.  See the contract
 * documentation for more.
 */

export const upVote = send(UP_VOTE)(false)('upVote')
export const payout = send(PAYOUT)(false)('payout')
export const createAnswer = send(CREATE_ANSWER)(false)('createAnswer')
export const createQuestion = send(CREATE_QUESTION)(true)('createQuestion')

// possible TODO contract.methods.myMethod.estimateGas estimates the gas a execution will take.

// possible TODO contract.events.eventName([options][, callback]) allows us to subscribe
// to events similar to a socket.  Might be a backend thing.

// the send method should be used on backend to approve users to be able to vote.

