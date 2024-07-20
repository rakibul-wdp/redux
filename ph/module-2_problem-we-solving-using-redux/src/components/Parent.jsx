import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <h1>Parent</h1>
        <h1>{count}</h1>
      </div>

      <Child count={count} setCount={setCount} />
    </div>
  );
};

export default Parent;
