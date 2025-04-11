import { useSelector } from "react-redux";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);

  console.log(count);

  return (
    <div>
      <button>Increment</button>
      <div>
        <h1>{count}</h1>
      </div>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
