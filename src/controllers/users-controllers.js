const { response } = require("express");
const express = require("express");
const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).send(users);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
};

const postUser = async (req, res) => {
  try {
    const user = new User({
      name: req.body.name,
      age: req.body.age
    });
    await user.save();
    return res.status(201).send(user);
  } catch (e) {
    return res.status(400).send({ error: e.message });
  }
};

module.exports = { getUsers, postUser };
