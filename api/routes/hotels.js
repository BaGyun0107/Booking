const express = require("express");
const { default: Hotel } = require("../models/Hotel");

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
  } catch (err) {
    res.status(500).json(err);
  }
});
//UPDATE
//DELETE
//GET
//GET ALL

router.get("/", (req, res) => {
  res.send("Hello, this is auth endpoint");
});

module.exports = router;
