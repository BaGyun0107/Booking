const express = require("express");
const {
  createRoom,
  updateRoom,
  deleteRoom,
  getRoom,
  getRooms,
} = require("../controllers/room");
const { vertifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

//CREATE
router.post("/:hotelid", vertifyAdmin, createRoom);
//UPDATE
router.put("/:id", vertifyAdmin, updateRoom);
//DELETE
router.delete("/:id/:hotelid", vertifyAdmin, deleteRoom);
//GET
router.get("/:id", getRoom);
//GET ALL
router.get("/", getRooms);

module.exports = router;
