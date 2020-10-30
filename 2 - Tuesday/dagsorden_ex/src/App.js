import "./App.css";
import CreateNamesTable from "./components/namesTable";
import Cars from "./components/cars";
import { cars } from "./components/cars";

let carTable = new Cars(cars);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CreateNamesTable />
        <br></br>
        {carTable.render()}
      </header>
    </div>
  );
}

// Remove comment symbols around the default value to test && operator.

let person = { name: "Peter", age: 34, height: 194 };
let { name, age, height, weight /*= 90 */ } = person; 

console.log(
  `Name: ${name}, Age: ${age}, Height: ${height} cm`
);

age = age || 0;
weight &&
  console.log(`Weight is present. Height: ${height} cm, weight: ${weight} kg`);



export default App;
