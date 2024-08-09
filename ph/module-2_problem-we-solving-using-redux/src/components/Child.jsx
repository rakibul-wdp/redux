import { useState } from "react";

const Child = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
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
