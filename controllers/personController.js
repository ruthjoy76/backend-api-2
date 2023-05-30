async function getPersons(req, res) {
  res.send('Persons resource');
}

async function getPerson(req, res) {
  res.send('Persons resource');
}

async function createPerson(req, res) {
  res.send('Persons resource');
}

async function updatePerson(req, res) {
  res.send('Persons resource');
}

async function deletePerson(req, res) {
  res.send('Persons resource');
}


export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
}