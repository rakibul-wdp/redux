import { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    if (action.type === "INCREMENT") return state + 1;
    else if (action.type === "DECREMENT") return state - 1;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
