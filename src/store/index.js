import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers'

const initialState = {};

const getMiddleware = () => {
  const middleware = [promise(), thunk];
  const devMiddleware = [...middleware, createLogger()];

  if (process.env.NODE_ENV === 'production') {
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

export default store;