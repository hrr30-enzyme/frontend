import { INPUT_CHANGE } from './types'

export const addText = function(inputType, input){
  console.log('This is the action')
  return {
    type: INPUT_CHANGE,
    payload: {
      inputType,
      input
    }
  }
}