import { createStore } from 'redux'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import { createQuestion } from '../actions/web3'

import { PRODUCTION } from '../constants'
import rootReducer from '../reducers'

const initialState = {};

const MIN_FEE = 2000000000000000;

const web3Middleware = store => next => action => {
  if (action.type === 'POST_QUESTION_FULFILLED') {
    const qId = action.payload.data.post.id;
    createQuestion(MIN_FEE, qId)(store.dispatch.bind(this), store.getState.bind(this));
    next(action);
  }
  next(action);
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
window.store = store;
export default store
