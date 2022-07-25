const express = require("express");
const {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getHotels,
  countByCity,
  countByType,
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
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);

module.exports = router;
