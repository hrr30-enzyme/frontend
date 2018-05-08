import configureStore from 'redux-mock-store';
import promiseMiddleware from 'redux-promise-middleware';
import fetchMock from 'fetch-mock'
import * as actions from '../../actions/signIn';

describe('async actions', () => {
  const middlewares = [promiseMiddleware()];
  const mockStore = configureStore(middlewares);


  it('it dispatches SIGN_IN_FULFILLED and SIGN_IN_PENDING on signIn', () => {
    const payload = {
      userInfo: {
        username: 'username'} 
    }
  
    fetchMock
    .getOnce('/user/sign-in', { 
      body: { 
        username: 'username' 
      }, 
    headers: { 
      'content-type': 'application/json' 
    } 

  })

    const expectedActions = ['SIGN_IN_FULFILLED', 'SIGN_IN_PENDING'];
    // configure Mock store
    const store = mockStore({ bucketlists: [] });
    
    // call the getBucketLists async action creator
    return store.dispatch(actions.signIn()).then(() => {
      
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      
      expect(actionTypes).toEqual(expectedActions);
      
    },
    );
  });
});