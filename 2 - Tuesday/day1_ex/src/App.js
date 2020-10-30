import "./App.css";
import upper, { text1, text2, text3 } from "./components/file1";
import person, { males, females } from "./components/file2";
import MultiWelcome from "./components/file3";

const { firstName, lastName, gender, email } = person;

function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>

      <h2>Ex 2</h2>
      <p>
        {firstName}, {email}
      </p>

      <h2>Ex 3</h2>
      <MultiWelcome   />
      
    </div>
  );
}

const [a, b, c, d, e = "Kurt", f = "Helle", g = "Tina"] = [...males, ...females];
console.log(a, b, c, d);
console.log(a, b, e, f, c, d, g);

let personV2 = {
  firstName: firstName,
  lastName: lastName,
  email: email,
  gender: gender,
  friends: [...males, ...females],
  phone: 123456,
};

console.log(personV2);

export default App;
