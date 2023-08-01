import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Table from "./components/Table";

function App() {
  return (
    <>
      <Header />
      <section>
        {/* <!-- Input Data --> */}
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
          <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <Form />
          </div>
        </div>

        {/* <!-- Preview Data --> */}
        <div className="table-container">
          <Table />
        </div>
      </section>
    </>
  );
}

export default App;
