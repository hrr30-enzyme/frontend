import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { createQuestion,  upVote, payout, createAnswer } from '../actions/web3'

import { PRODUCTION } from '../constants'
import rootReducer from '../reducers'

const initialState = {};

const MIN_FEE = 2000000000000000;

const web3Middleware = store => next => action => {
  if (action.type === 'POST_QUESTION_FULFILLED') {
    const qId = action.payload.data.post.id
    const bounty = action.payload.data.post.bounty
    console.log(bounty);
    createQuestion(bounty, qId)(store.dispatch.bind(this), store.getState.bind(this))
    next(action);

  } else if (action.type === 'POST_ANSWER_FULFILLED') {
    const qId = action.payload.data.post.PostId
    const aId = action.payload.data.post.id
    createAnswer(MIN_FEE, aId, qId)(store.dispatch.bind(this), store.getState.bind(this))
    next(action)

  } else if (action.type === 'UP_VOTE') {
    const aId = action.payload
    upVote(0, aId)(store.dispatch.bind(this), store.getState.bind(this))
    next(action)

  } else if (action.type === 'PAYOUT') {
    console.log('payout winner', action.payload)
    const qId = action.payload;
    payout(qId)(store.dispatch.bind(this), store.getState.bind(this))

  } else {
    console.log('action in store web3\n\n\n', action)
    next(action)
  }
}

const getMiddleware = () => {
  const middleware = [web3Middleware, promise(), thunk];
  const devMiddleware = [...middleware, createLogger()];

  if (PRODUCTION) {
    return applyMiddleware(...middleware)
  } else {
    return composeWithDevTools(applyMiddleware(...devMiddleware));
  }
};

const store = createStore(
  rootReducer,
  initialState,
  getMiddleware()
);
window.store = store
export default store