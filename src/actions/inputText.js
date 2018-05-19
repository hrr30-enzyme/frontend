import { INPUT_CHANGE, CLEAR_ALL_INPUTS } from "./types";

export const addText = function(inputType, input, e) {
  if (e) {
    e.preventDefault();
    console.log('in action creator', e);
  }
  return {
    type: INPUT_CHANGE,
    payload: {
      inputType,
      input
    }
  };
};

export const clearText = function(inputType) {
  return {
    type: INPUT_CHANGE,
    payload: {
      inputType,
      input: ""
    }
  };
};
export const clearAll = function() {
  return {
    type: CLEAR_ALL_INPUTS
  };
};
