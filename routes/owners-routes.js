const express = require("express");
const router = express.Router();
const Owner = require("../models/Owners");

// get owners
router.get("/owners", async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json(owners);
  } catch (err) {
    res.status(500).send("server error");
  }
});

// create owner
router.post("/owners", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  try {
    const owner = new Owner({
      firstName,
      lastName,
      email,
      password,
    });
    console.log(owner);

    // add to DB
    await owner.save();
    res.status(200).json({ owner });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// edit owner
router.put("/editowner/:id", async (req, res) => {
  console.log("in route");
  const { firstName, lastName, email, password, foodtruckId } = req.body;
  console.log(req.body);
  try {
    const owner = new Owner({
      firstName,
      lastName,
      email,
      password,
      foodtruckId,
    });
    console.log(owner);

    // add to DB
    await owner.save();
    res.status(200).json({ owner });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// get owner profile
router.get("/owner/:id", async (req, res) => {
  console.log("in route");

  const { id } = req.params;

  try {
    const owner = await Owner.findById(id);
    res.status(200).json(owner);
  } catch (err) {
    res.status(500).send("server error");
  }
});

module.exports = router;
