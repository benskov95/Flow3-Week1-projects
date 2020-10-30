import React, { useState } from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };

  const handleChange = (evt) => {
    const target = evt.target;
    const value = target.value;
    const id = target.id;
    setPerson({ ...person, [id]: value });
  }
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addEditPerson(person);
  }

  function clearFormFields() {
    setPerson(emptyPerson);
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}>{person.id === "" ? "Add Persons" : "Edit Person"}</h3>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" value={person.id}/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              placeholder="Enter Name"
              value={person.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              placeholder="Enter age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              placeholder="Enter Gender"
              value={person.gender}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
              onClick={clearFormFields}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
