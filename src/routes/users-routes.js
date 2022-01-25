const express = require("express")
const {getUsers, postUser} = require ("../controllers/users-controllers")

const usersRouter = express.Router();

usersRouter.get("/", getUsers);
usersRouter.post("/", postUser);


module.exports = usersRouter