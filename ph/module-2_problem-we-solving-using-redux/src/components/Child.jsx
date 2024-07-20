const Child = ({ count, setCount }) => {
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
