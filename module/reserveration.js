const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReservationSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  date: {
    type: Array,
    required: true
  },
  days: {
    type: Array,
    required: true
  },
  time: {
    type: Array,
    required: true
  },
  pickSend: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Reservation", ReservationSchema);
