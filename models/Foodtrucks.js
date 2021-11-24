const mongoose = require("mongoose");
const { ObjectId } = mongoose;

const FoodtrucksSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  foodType: {
    type: String,
    required: true,
  },
  schedule: {
    type: Object,
  },
  ownerId: {
    type: String,
    required: true,
  },
});

module.exports = Foodtruck = mongoose.model("Foodtruck", FoodtrucksSchema);
