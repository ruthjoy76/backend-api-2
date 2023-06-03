import Person from "../models/Person.js";

async function getPersons(_req, res) {
  const persons = await Person.find({});

  return res.json(persons);
}

// Get Person
async function getPerson(req, res) {
  const id = req.params.id;
  const person = await Person.findById(id);

  return res.json(person);
}

// Create Person
async function createPerson(req, res, next) {
  try {
    const { name, number } = req.body;
    const personExists = await Person.findOne({ name });

    if (personExists)
      return res.status(400).json({ error: "Person already exists" });

    if (name === "" || number === "")
      return res.status(400).json({ error: "Name or number are required" });

    if (typeof name !== "string" || typeof number !== "string")
      return res.status(400).json({ error: "Name and number must be strings" });

    const person = new Person({
      name,
      number,
    });

    const savedPerson = await person.save();
    return res.status(201).json(savedPerson);
  } catch (error) {
    next(error);
  }
}

// Update Person
async function updatePerson(req, res) {
  const id = req.params.id;
  const { name, number } = req.body;

  const person = {
    name,
    number,
  };

  const updatedPerson = await Person.findByIdAndUpdate(id, person, {
    new: true,
  });

  res.json(updatedPerson);
}

//Delete Person
async function deletePerson(req, res) {
  const id = req.params.id;
  await Person.findByIdAndDelete(id);
  res.status(204).end();
}


export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
};