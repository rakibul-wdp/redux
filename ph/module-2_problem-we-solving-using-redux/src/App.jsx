import { createContext, useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <Counter />
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
