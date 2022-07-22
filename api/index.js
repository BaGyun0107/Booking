const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

const authRoute = require("./routes/auth");
const hotelsRoute = require("./routes/hotels");
const roomsRoute = require("./routes/rooms");
const usersRoute = require("./routes/users");

dotenv.config();

const connet = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//middlewares

//? next()로 미들웨어가 잘 작동 하는지, 어느 API가 작동했는지 터미널에서 확인할 수 있다.
// app.use((req, res, next) => {
//   console.log("hi im a middleware!");
//   next();
// });

app.use(express.json());

app.use("/auth", authRoute);
app.use("/hotels", hotelsRoute);
app.use("/rooms", roomsRoute);
app.use("/users", usersRoute);

//? next()를 활용하여 에러핸들링을 간편하게 할 수 있다.
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(4000, () => {
  connet();
  console.log(`server is running 4000`);
});
