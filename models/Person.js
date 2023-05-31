import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: String,
  Number: String,
});

const Person = mongoose.model("Person", personSchema);

export default Person;