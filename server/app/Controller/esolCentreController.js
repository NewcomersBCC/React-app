import EsolCentre from "/Users/luantavares/Development/NewComers/React-app/server/app/Models/esolCentre.js";
import esolCentreService from "/Users/luantavares/Development/NewComers/React-app/server/app/Services/esolCentreService.js";

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
  async validateCentre(id, centreCode) {
    try {
      const esolCentre = await esolCentreService.find(id);
      return esolCentre.centreCode === centreCode ? true : false;
    } catch (error) {
      console.error(
        "[esolCentreController] Could not fetch vehicles from database",
        error
      );
      return error;
    }
  },
};
