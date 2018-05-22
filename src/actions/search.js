import axios from 'axios'

import { SEARCH } from './types'

import { ORIGIN } from '../constants'

import {queryString} from './posts'

export const search = params => {
  const str = queryString({search: params});
  return {
    type: SEARCH,
    payload: axios.get(`${ORIGIN}/search${str}`)
  };
};