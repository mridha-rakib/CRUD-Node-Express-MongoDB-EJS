let userDb = require("../model/model");

// create and save new user
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).json({
      message: "Content can not empty",
    });
  }

  // new user
  const user = new UserDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
  });

  // save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).json({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

// retrieve and return all users
exports.find = (req, res) => {};

// update a new identified user by user id
exports.update = (req, res) => {};

// delete a user with specified user id in the request
exports.delete = (req, res) => {};
