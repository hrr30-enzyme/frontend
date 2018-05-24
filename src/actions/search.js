import axios from 'axios'

import { SEARCH, SUGGEST, SUGGEST_CLEARED } from './types'

import { ORIGIN } from '../constants'

import {queryString} from './posts'

export const search = params => {
  const str = queryString({search: params});
  return {
    type: SEARCH,
    payload: axios.get(`${ORIGIN}/search/docs${str}`)
  };
}

export const suggest = params => {
  const str = queryString({search: params})
  return {
    type: SUGGEST,
    payload: axios.get(`${ORIGIN}/search/suggest${str}`)
  };
}

export const clearSuggest = () => {
  return {
    type: SUGGEST_CLEARED
  }
}