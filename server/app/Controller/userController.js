const User = require("../Models/user");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    User.create({
      firstName,
      lastName,
      email,
      password: hash,
    })
      .then(() => {
        res.status(200).send("User Created Successfully");
      })
      .catch((err) => {
        res.status(500).send("Something went wrong");
        console.log(err);
      });
  },
  index(req, res) {
    User.findAll()
      .then((users) => {
        console.log(users);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
