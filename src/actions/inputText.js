import { INPUT_CHANGE } from './types'

export const addText = function(inputType, input){
  return {
    type: INPUT_CHANGE,
    payload: {
      inputType,
      input
    }
  }
}