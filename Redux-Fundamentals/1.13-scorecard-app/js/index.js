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

const reset = () => {
  return {
    type: RESET,
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
    const newValue = state.value - action.payload;
    const updatedValue = newValue < 0 ? 0 : newValue;

    return {
      ...state,
      value: updatedValue
    }
  } else if (action.type === ADD) {
    return {
      ...state,
    }
  } else if (action.type === RESET) {
    return {
      ...state,
      value: state.value = 0
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

// button click listeners
incrementEl.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();

    const incrementValue = parseInt(incrementEl.value);
    store.dispatch(increment(incrementValue));

    incrementEl.value = "";
  }
});

decrementEl.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();

    const decrementValue = parseInt(decrementEl.value);
    store.dispatch(decrement(decrementValue));

    decrementEl.value = "";
  }
});

resetEl.addEventListener("click", () => {
  store.dispatch(reset());
})

addEl.addEventListener("click", () => {
  // Create a new match element
  const newMatch = document.createElement("div");
  newMatch.classList.add("match");

  // Set the content of the new match element
  newMatch.innerHTML = `
    <div class="wrapper">
      <button class="lws-delete">
        <img src="./image/delete.svg" alt="" />
      </button>
      <h3 class="lws-matchName">Match</h3>
    </div>
    <div class="inc-dec">
      <form class="incrementForm">
        <h4>Increment</h4>
        <input
          type="number"
          name="increment"
          class="lws-increment"
          id="increment"
        />
      </form>
      <form class="decrementForm">
        <h4>Decrement</h4>
        <input
          type="number"
          name="decrement"
          class="lws-decrement"
          id="decrement"
        />
      </form>
    </div>
    <div class="numbers">
      <h2 class="lws-singleResult" id="total">0</h2>
    </div>
  `;

  // Append the new match element to the container
  const matchContainer = document.getElementById("all-matches-container");
  matchContainer.appendChild(newMatch);

  store.dispatch(add());
});
