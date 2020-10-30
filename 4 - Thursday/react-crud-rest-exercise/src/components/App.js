import React, { useState, useEffect } from "react";
import AddEditPerson from "./AddEditPerson";
import AllPersons from "./AllPersons";

function App({apiFacade}) {
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const [personToAddEdit, setPersonToAddEdit] = useState(emptyPerson);
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    apiFacade.getPersons((data) => setPersons(data));
  },[personToAddEdit]);

  const addEditPerson = (person) => {
    apiFacade.addEditPerson(person, (data) => {setPersonToAddEdit({...data})});
  }
  
  const deletePerson = (id) => {
    apiFacade.deletePerson(id, console.log);
    setPersonToAddEdit({id: ""});
  }

  return (
    <div className="container">
      <div className="row">
        <h3>CRUD Demo </h3>
        <div className="col-md-7">
          <h3>All Persons</h3>
          <AllPersons
            persons={persons}
            editPerson={addEditPerson}
            deletePerson={deletePerson}
          />
        </div>
        <div className="col-md-5">
          <AddEditPerson
            newPerson={personToAddEdit}
            addEditPerson={addEditPerson}
            key={personToAddEdit.id}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
