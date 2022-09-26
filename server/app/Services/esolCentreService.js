import EsolCentre from "/Users/luantavares/Development/NewComers/React-app/server/app/Models/esolCentre.js";

export default {
  find(id) {
    return EsolCentre.findOne({
      where: { id },
    });
  },
};
