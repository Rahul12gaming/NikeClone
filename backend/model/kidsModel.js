import mongoose from 'mongoose'

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const kidsSchema = new mongoose.Schema({
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

const Kids = mongoose.model("Kids", kidsSchema);

export default Kids;