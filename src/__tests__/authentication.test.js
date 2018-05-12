import axios from 'axios'
import moxios from 'moxios'

import store from '../store'
import { signin, signout, signup } from '../actions/authentication'

describe('Test createUser', () => {
  
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('Should update userinfo after signing in', (done) => {

    const username = 'username' + Math.random();
    const email = `${username}@gmail.com`;
    const password = `username`;
    const id = 4;

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
          createdAt: Date.now(),
          email,
          id,
          updatedAt: Date.now(),
          username
        
      })
    })

    expect(store.getState().authentication.signedIn).toBeFalsy()

    const action = signin({username, email, password});

    store.dispatch(action).then(() => {
      expect(store.getState().authentication.signedIn).toBeTruthy();
      done();
    })


  })
})