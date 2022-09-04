const mongoose = require("mongoose");

const exerciseSchema = mongoose.Schema({
  exerciseName: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
  },
  sets: { type: Number, min: [1, "Must enter at lease one set"] },
  reps: { type: Number, min: [1, "Must enter at lease one rep"] },
});

module.exports = exerciseSchema;
