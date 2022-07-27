const User = require("../Models/user");
const bcrypt = require("bcrypt");

module.exports = {
  async create(req, res) {
    const { firstName, lastName, email, password } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email: email },
      defaults: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
      },
    });

    if (!created) {
      return res.status(400).send("Email Already Registered");
    }

    return res.status(200).send("User Created Successfully");
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
