import { useReducer } from "react";

const Counter = () => {
  const initialState = 0;

  const reducer = (state, action) => {
    console.log(action);

    if (action.type === "INCREMENT") return state + action.payload.count;
    else if (action.type === "DECREMENT") return state - action.payload.count;
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <div>
        <button
          onClick={() => dispatch({ type: "DECREMENT", payload: { count: 5 } })}
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: "INCREMENT", payload: { count: 8 } })}
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
