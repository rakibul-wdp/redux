// select dom elements
const totalEl = document.getElementById("total");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const addEl = document.getElementById("add");
const resetEl = document.getElementById("reset");

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

// initial state
const initialState = {
  value: 0
}

// create reducer function
function scoreboardReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload
    }
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload
    }
  } else if (action.type === ADD) {
    return {
      ...state,
      value: state.value + action.payload
    }
  } else if (action.type === RESET) {
    return {
      ...state,
      value: state.value + action.payload
    }
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(scoreboardReducer);

const render = () => {
  const state = store.getState();
  totalEl.innerText = state.value.toString();
}

// update UI initially
render();

store.subscribe(render);