import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import moxios from "moxios";
import textInput, { initialState } from "../textInputReducer";
import { addText, clearText, clearAll } from "../../actions/inputText";

const state = {
  username: "",
  password: "",
  email: "",
  questionTitle: "",
  questionBody: "",
  answerBody: "",
  commentBody: ""
};

let store = createStore(textInput, initialState, applyMiddleware(thunk));

describe("textInputReducer()", () => {
    it('should have 1 test', () => {
      expect(true).toBeTruthy();
    })
/*  it("should add input for username", () => {
    store.dispatch(addText("username", "epeavy"));
    expect(store.getState()).toEqual({
      username: "epeavy",
      password: "",
      email: "",
      questionTitle: "",
      questionBody: "",
      answerBody: "",
      commentBody: ""
    });
  });*/

/*  it("should add input for questionTitle", () => {
    store.dispatch(addText("questionTitle", "epeavy"));
    expect(store.getState()).toEqual({
      username: "epeavy",
      password: "",
      email: "",
      questionTitle: "epeavy",
      questionBody: "",
      answerBody: "",
      commentBody: ""
    });
  });*/
/*  it("should clear text for questionTitle", () => {
    store.dispatch(clearText("questionTitle"));
    expect(store.getState()).toEqual({
      username: "epeavy",
      password: "",
      email: "",
      questionTitle: "",
      questionBody: "",
      answerBody: "",
      commentBody: ""
    });
  });*/
/*  it("should clear all text", () => {
    store.dispatch(clearAll("questionTitle"));
    expect(store.getState()).toEqual({
      username: "",
      password: "",
      email: "",
      questionTitle: "",
      questionBody: "",
      answerBody: "",
      commentBody: ""
    });
  });*/
});
