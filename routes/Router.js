const mongoose = require("mongoose");
require("../module/reserveration");

const Reservation = mongoose.model("Reservation");
module.exports = app => {
  app.get("/reservation", (req, res) => {
    console.log("here it is router", Reservation);
  });
  app.post("/reservation", async (req, res) => {
    const { username, date, days, time, pickSend } = req.body;
    const reservation = new Reservation({
      username,
      date,
      days,
      time,
      pickSend
    });
    reservation.save((err, reservation) => {
      if (err) {
        return console.log(err);
      }
      return res.json({ reservation });
    });
  });
};
