import { Component } from "react";

export const cars = [
  { make: "Ferrari", model: "812 GTS", year: 2011, price: 792000 },
  { make: "Audi", model: "A4", year: 2018, price: 682000 },
  { make: "Nissan", model: "Shitbox", year: 1983, price: 2100 },
];

class Cars extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.map((car) => (
            <AddRows car={car} />
          ))}
        </tbody>
      </table>
    );
  }
}

function AddRows(props) {
  const { car } = props;
  return (
    <tr>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.price}</td>
    </tr>
  );
}

export default Cars;
