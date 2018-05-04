// create store is used to create our redux store which is the crux of our app.
// the store holds the entire state of our app
import { createStore } from 'redux';

// applyMiddleware combines our middleware that runs before all our reducers
import { applyMiddleware } from 'redux';

// create logger logs out all actions and state change sto console
import { createLogger } from 'redux-logger';

// I forgot what thunk does need to look it up
import thunk from 'redux-thunk';
// Promise lets us dispatch Axios requests as actions.
// we attatch the action such as GET_USER
// it automatically dispatches GET_USER_PENDING to our reducer
// after fulfilled it dispatches GET_USER_FULFILLED to our reducer (kinda like .then)
// after rejected it dispatches GET_LINEUPS_REJECTED to our reducer (kinda like .catch)
import promise from 'redux-promise-middleware';

// Compose with dev tools is what gives us that awesome debugger in chrome
import { composeWithDevTools } from 'redux-devtools-extension';

// our reducer tells our store how to update itself whenever an action is dispatched
import rootReducer from '../reducers'

// our initial state is the initial state of our app
const initialState = {};

// whenever a action is dispatched it runs through the middleware fast
const middleware = [promise()];

const devMiddleware = [...middleware, thunk, createLogger()];

// don't want dev tools running in production
const getMiddleware = () => 
  process.env.NODE_ENV === 'production' 
    ? applyMiddleware(...middleware)
    : composeWithDevTools(applyMiddleware(...devMiddleware));

// we pass our reducer, initial state, and middleware into the createStore to initialize it
const store = createStore(
  rootReducer,
  initialState, 
  getMiddleware()
);

export default store;