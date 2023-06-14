// action identifiers
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD = "add";
const RESET = "reset";

// action creators
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value
  }
}

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  }
}

const add = (value) => {
  return {
    type: ADD,
    payload: value
  }
}

const reset = (value) => {
  return {
    type: RESET,
    payload: value
  }
}