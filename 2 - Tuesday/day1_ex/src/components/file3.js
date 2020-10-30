import React from "react";
import { persons } from "./file2";
import PropTypes from "prop-types";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function WelcomePerson(props) {
  const { person } = props;
  return (
    <h1>
      {person.firstName}, {person.lastName}, {person.email}
    </h1>
  );
}

function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />
      {persons.map((person) => (
        <WelcomePerson person={person} />
      ))}
      {/* <WelcomePerson person={persons[0]} />
      <WelcomePerson person={persons[1]} />
      <WelcomePerson person={persons[2]} /> */}
    </div>
  );
}

WelcomePerson.propTypes = {
  person: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};

export default MultiWelcome;
