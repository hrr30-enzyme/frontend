import { ADD_TEXT } from './types'

export const addText = function(inputType, input){
  console.log('This is the action')
  return {
    type: 'ADD_TEXT',
    payload: {
      inputType,
      input
    }
  }
}