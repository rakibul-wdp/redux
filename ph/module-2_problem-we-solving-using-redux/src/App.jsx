import { createContext, useState } from "react";
import LongForm from "./components/LongForm";

export const COUNTER_CONTEXT = createContext();

function App() {
  const [count, setCount] = useState(0);

  const value = { count, setCount };

  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <LongForm />
    </COUNTER_CONTEXT.Provider>
  );
}

export default App;
