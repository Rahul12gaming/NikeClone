import mongoose from 'mongoose'

const reqString = { type: String, required: true };
const reqNumber = { type: Number, required: true };
const reqArray = { type: Array, required: true };

const clothSchema = new mongoose.Schema({
  heading: reqString,
  gender: reqString,
  description: reqString,
  img: reqArray,
}, {
  versionKey: false
});

const cloth = mongoose.model("cloth",clothSchema );

export default cloth;