const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
} = require("../controllers/hotel");
const { vertifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE
router.post("/", vertifyAdmin, createHotel);
//UPDATE
router.put("/:id", vertifyAdmin, updateHotel);
//DELETE
router.delete("/:id", vertifyAdmin, deleteHotel);
//GET
router.get("/:id", getHotel);
//GET ALL
router.get("/", getHotels);

module.exports = router;
