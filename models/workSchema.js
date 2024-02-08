const mongoose = require("mongoose");

const coachSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  //   age: {
  //     type: Number,
  //     required: true,
  //   },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  prefCountry:{
    type:String,
    required:true
  },
  address: {
    type: String,
    required: true,
  },
  town: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
  addBio:{
    type:String,
    required:false,
  },
  achievements: {
    type: String,
    required:false,
  },
  swimExp:{
    type:String,
    required:true,
  },
});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
