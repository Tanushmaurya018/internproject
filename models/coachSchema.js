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

  address: {
    type: String,
    required: true,
  },
  achievements: {
    type: String,
    required:false,
  },

});

const Coach = mongoose.model("Coach", coachSchema);

module.exports = Coach;
