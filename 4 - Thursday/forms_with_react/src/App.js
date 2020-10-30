import "./App.css";
import FormDemo from "./components/FormDemo";
import ReservationForm from "./components/FormDemoMultiple";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Simple form</h3>
        <FormDemo />
        <br></br>
        <h3>Multi-input form</h3>
        <ReservationForm />
      </header>
    </div>
  );
}

export default App;
