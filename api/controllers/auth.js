const User = require("../models/User");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");

const register = async (req, res, next) => {
  try {
    //? 비밀번호 암호화
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) return next(createError(404, "User not found!"));

    //? 패스워드 해싱
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or Username"));

    //? 패스워드와 어드민 상태를 빼고서 다른 데이터들을 respone 해주기 위한 구조분해할당
    const { password, isAdmin, ...otherDetails } = user._doc;
    res.status(200).send({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
