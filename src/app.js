require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
// TODO: add require to the userRouter file

const app = express();

const publicPath = path.join(__dirname, "../client/build");

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

//
const mongo_uri = process.env.MONGO_URI;

console.log(mongo_uri);

//
mongoose
  .connect(mongo_uri)
  .then(() => console.log("Database connected"))
  .catch((err) => console.error(err));

// TODO: add app.use("/", userRouter)

app.use("*", (req, res) => {
  res.send("Wrong route");
});



const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));

