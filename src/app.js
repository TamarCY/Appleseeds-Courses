require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const publicPath = path.join(__dirname, "../client/build");
console.log(publicPath);

app.use(cors());
app.use(express.json());
app.use(express.static(publicPath));

app.use("*", (req, res) => {
	res.send("Wrong route");
});

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));