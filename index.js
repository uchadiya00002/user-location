const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//connecting to env file
dotenv.config();

//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
//connect to Database
mongoose.connect(process.env.DB_CONNECT, () =>
  console.log("Connected to Database")
);

//middlewares
app.use(express.json());

//route middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.listen(5000, () => console.log("Server is running on port 5000"));
