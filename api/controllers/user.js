const User = require("../models/User");
const createError = require("../utils/error");

const createUser = async (req, res, next) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true } //? 변경된 내용을 보낸 데이터에서 바로 확인 할 수 있게끔 만들어준다.
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};
const getUsers = async (req, res, next) => {
  // const failed = true;

  // if (failed) return next(createError(401, "You are not authenticated!"));

  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = { createUser, updateUser, deleteUser, getUser, getUsers };
