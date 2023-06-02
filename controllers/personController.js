import Person from "../models/Person.js";

async function getPersons(_req, res) {
  const persons = await Person.find({});

  return res.json(persons);
}

function getPerson(req, res) {
 Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person);
      } else {
        res.status(404).end();
      }
    })

    .catch((err) => {
      console.log(error);
      return res.status(500).end();
    });
}

async function createPerson(req, res) {
  const { name, number } = req.body; 

  const person = new Person({
    name,
    number,
  });

  const savedPerson = await person.save();

  return res.status(201).json(savedPerson);
}


async function updatePerson(req, res) {
  const id = req.params.id;
  const { name, number } = req.body;

  const person = {
    name,
    number,
  };

  const updatePerson = await Person.findByIdAndUpdate(id, person, {
    new: true,
  });

  res.json(updatePerson);
}

async function deletePerson(req, res) {
  const { id } = req.params.id;

  await Person.findByIdAndDelete(id);

  res.status(204).end();

}



export default {
  getPersons,
  getPerson,
  createPerson,
  updatePerson,
  deletePerson,
}