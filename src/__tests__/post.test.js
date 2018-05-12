import axios from 'axios'
import moxios from 'moxios'

import store from '../store'
import { signin, signout, signup } from '../actions/authentication'

describe('Test createUser', () => {
  
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  test('Should write a test here at some point', (done) => {

    expect(true).toBeTruthy();
    done();
  })
})