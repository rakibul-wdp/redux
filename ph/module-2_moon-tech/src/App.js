import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

const PRODUCT_CONTEXT = createContext();

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const value = {
    data,
  };

  return (
    <div>
      <PRODUCT_CONTEXT value={value}>
        <RouterProvider router={routes} />
      </PRODUCT_CONTEXT>
    </div>
  );
}

export default App;
