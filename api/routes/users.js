const express = require("express");
const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/User");
const {
  verifyToken,
  vertifyUser,
  vertifyAdmin,
} = require("../utils/verifyToken");

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, you are logged in");
// });

// router.get("/checkuser/:id", vertifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", vertifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all account");
// });

//UPDATE
router.put("/:id", vertifyUser, updateUser);
//DELETE
router.delete("/:id", vertifyUser, deleteUser);
//GET
router.get("/:id", vertifyUser, getUser);
//GET ALL
router.get("/", vertifyAdmin, getUsers);

module.exports = router;
