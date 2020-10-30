import "./App.css";
import { useState, useEffect } from "react";
import GetRandomJokes from "./components/randomJokes";
import Members from "./components/listDemo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter
          val={parseInt(localStorage.getItem("count")) || 0}
          incVal={5}
        />
        <GetRandomJokes />
        <Members />
      </header>
    </div>
  );
}

function Counter(props) {
  const { val, incVal } = props;
  const [count, setCount] = useState(val);

  useEffect(() => {
    localStorage.setItem("count", count);
  });

  return (
    <div>
      <h2>Counter</h2>
      <p>
        {count}
        <br></br>
      </p>
      <button onClick={() => setCount(count + incVal)}>Increment</button>
      <button onClick={() => setCount(count - incVal)}>Decrement</button>
      <button onClick={() => setCount(incVal)}>Reset</button>
    </div>
  );
}

export default App;
