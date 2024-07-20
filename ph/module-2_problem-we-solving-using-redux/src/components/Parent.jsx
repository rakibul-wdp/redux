import { useContext } from "react";
import { COUNTER_CONTEXT } from "../App";
import Child from "./Child";

const Parent = () => {
  const { count } = useContext(COUNTER_CONTEXT);

  return (
    <div>
      <div>
        <h1>Parent</h1>
        <h1>{count}</h1>
      </div>

      <Child />
    </div>
  );
};

export default Parent;
