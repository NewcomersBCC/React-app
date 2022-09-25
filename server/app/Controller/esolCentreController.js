import EsolCentre from "/Users/luantavares/Development/NewComers/React-app/server/app/Models/esolCentre.js";

export default {
  async index(req, res) {
    await EsolCentre.findAll()
      .then((EsolCenters) => {
        return res.json(EsolCenters);
      })
      .catch((err) => {
        return res.status(400).send("Error while fetching data: " + err);
      });
  },
};
