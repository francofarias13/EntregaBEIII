import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: String,
  specie: String,
  age: Number,
});

const PetModel = mongoose.model("Pet", petSchema);
export default PetModel;
