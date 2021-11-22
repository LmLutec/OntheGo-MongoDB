const mongoose = require("mongoose");
const { ObjectId } = mongoose;

const OwnersSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  foodtruckId: {
    type: String,
  },
});

module.exports = Owner = mongoose.model("Owner", OwnersSchema);
