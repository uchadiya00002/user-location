const number = require("@hapi/joi/lib/types/number");
const string = require("@hapi/joi/lib/types/string");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
    min: 0,
    max: 255,
  },

  lastname: {
    type: String,
    required: true,
    min: 0,
    max: 255,
  },

  phone: {
    type: String,
    required: true,
    min: 0,
    max: 255,
  },

  email: {
    type: String,
    required: true,
    min: 0,
    max: 255,
  },

  password: {
    type: String,
    required: true,
    min: 0,
    max: 1024,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
