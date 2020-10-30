import utils from "./utils";
let URL = "http://localhost:3456/api/";


function apiFacade() {
  function getPersons(callback) {
    utils.fetchAny(URL,callback);
}

function addEditPerson(person, callback) {
  if (person.id === "") {
    utils.fetchAny(URL, callback, 'POST', person);
  } else {
    utils.fetchAny(URL + person.id,  callback, 'PUT', person);
  }
}
  
function deletePerson(id, callback) {
  utils.fetchAny(URL + id, callback, 'DELETE', id);
}
  
  return {
    getPersons,
    addEditPerson,
    deletePerson
  };
}
const returnValue = apiFacade();
export default returnValue;

