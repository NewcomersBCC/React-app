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
