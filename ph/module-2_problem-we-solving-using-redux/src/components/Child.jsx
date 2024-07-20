import { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";

const Child = () => {
  const { count, setCount } = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <h1>Child</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount((prevState) => prevState - 1)}>
          Decrement
        </button>
        <button onClick={() => setCount((prevState) => prevState + 1)}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default Child;
