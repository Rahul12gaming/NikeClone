import mongoose from 'mongoose'

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const menSchema = new mongoose.Schema({
  title: reqString,
  gender: reqString,
  description: reqString,
  category: reqString,
  price: reqNumber,
  size: reqArray,
  color: reqString,
  rating: reqNumber,
  img: reqArray,
}, {
  versionKey: false
});

const men = mongoose.model("Men", menSchema);

export default men;