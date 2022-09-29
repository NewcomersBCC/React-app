import userService from "/Users/luantavares/Development/NewComers/React-app/server/app/Services/userService.js";
import esolCentreController from "/Users/luantavares/Development/NewComers/React-app/server/app/Controller/esolCentreController.js";

import bcrypt from "bcrypt";

export default {
  async create(req, res) {
    const {
      firstName,
      lastName,
      email,
      password,
      isHelper,
      selectedEsolCentre,
      centreCode,
    } = req.body;

    const hash = await bcrypt.hash(password, 10);

    if (isHelper == true) {
      const isCentreCodeValid = await esolCentreController.validateCentre(
        selectedEsolCentre,
        centreCode
      );

      if (!isCentreCodeValid) {
        return res
          .status(400)
          .send(
            "Mismatching ESOL Centre Code, contact your Esol tutor for more information"
          );
      }
      const [user, created] = await userService.create(
        firstName,
        lastName,
        email,
        hash,
        isHelper,
        selectedEsolCentre
      );

      if (!created) {
        return res.status(400).send("Email Already Registered");
      }
    } else {
      const [user, created] = await userService.create(
        firstName,
        lastName,
        email,
        hash,
        isHelper,
        selectedEsolCentre
      );

      if (!created) {
        return res.status(400).send("Email Already Registered");
      }
    }

    return res.status(200).send("User Created Successfully");
  },
  async login(req, res) {
    const { email, password } = req.body;

    try {
      const user = await userService.find(email);
      const dbPassword = user.password;

      const match = await bcrypt.compare(password, dbPassword);
      if (!match) {
        return res
          .status(400)
          .json({ error: "Wrong username and password combination" });
      }
    } catch {
      return res.status(400).send("User not found");
    }

    return res.status(200).send("User logged in successfully");
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
