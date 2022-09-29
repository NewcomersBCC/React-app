import User from "/Users/luantavares/Development/NewComers/React-app/server/app/Models/user.js";

export default {
  create(firstName, lastName, email, hash, isHelper, selectedEsolCentre) {
    return User.findOrCreate({
      where: { email: email },
      defaults: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: hash,
        isHelper: isHelper,
        centreID: selectedEsolCentre,
      },
    });
  },

  find(email) {
    return User.findOne({ where: { email: email } });
  },
};
