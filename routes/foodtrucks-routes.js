const express = require("express");
const router = express.Router();
const Foodtruck = require("../models/Foodtrucks");

// get foodtrucks
router.get("/foodtrucks", async (req, res) => {
  try {
    const foodtrucks = await Foodtruck.find();
    res.status(200).json(foodtrucks);
  } catch (err) {
    res.status(500).send("server error");
  }
});

// create foodtruck
router.post("/foodtrucks", async (req, res) => {
  console.log("in route");
  const { name, city, state, street, zipCode, phoneNumber, foodType, ownerId } =
    req.body;
  console.log(req.body);
  try {
    const foodtruck = new Foodtruck({
      name,
      city,
      state,
      street,
      zipCode,
      phoneNumber,
      foodType,
      ownerId,
    });
    console.log(foodtruck);

    // add to DB
    await foodtruck.save();
    res.status(200).json({ foodtruck });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// edit foodtruck
router.put("/editfoodtruck/:id", async (req, res) => {
  console.log("in route");
  const { name, city, state, street, zipCode, phoneNumber, foodType, ownerId } =
    req.body;
  console.log(req.body);
  try {
    const foodtruck = new Foodtruck({
      name,
      city,
      state,
      street,
      zipCode,
      phoneNumber,
      foodType,
      ownerId,
    });
    console.log(foodtruck);

    // add to DB
    await foodtruck.save();
    res.status(200).json({ foodtruck });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// add schedule
router.put("/schedule/:id", async (req, res) => {
  const {
    monStart,
    monEnd,
    tuesStart,
    tuesEnd,
    wedStart,
    wedEnd,
    thursStart,
    thursEnd,
    friStart,
    friEnd,
    satStart,
    satEnd,
    sunStart,
    sunEnd,
    newYearsDayStart,
    newYearsDayEnd,
    thanksgivingDayStart,
    thanksgivingDayEnd,
    christmasDayStart,
    christmasDayEnd,
  } = req.body;

  const id = req.params.id;
  try {
    const schedule = await Foodtruck.findByIdAndUpdate(id, {
      $insert: {
        schedule: {
          monStart,
          monEnd,
          tuesStart,
          tuesEnd,
          wedStart,
          wedEnd,
          thursStart,
          thursEnd,
          friStart,
          friEnd,
          satStart,
          satEnd,
          sunStart,
          sunEnd,
          newYearsDayStart,
          newYearsDayEnd,
          thanksgivingDayStart,
          thanksgivingDayEnd,
          christmasDayStart,
          christmasDayEnd,
        },
      },
    });

    // add to DB
    await district.save();
    res.status(200).json({ district });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

module.exports = router;
