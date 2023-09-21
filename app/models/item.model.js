module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
      nameVehicle: {
        type: Sequelize.STRING,
      },
      descriptionVehicle: {
        type: Sequelize.STRING,
      },
      makeVehicle: {
        type: Sequelize.STRING,
      },
      quantityVehicles: {
        type: Sequelize.INTEGER,
      },
      valueVehicle: {
        type: Sequelize.DOUBLE,
      },
      isNew: {
        type: Sequelize.BOOLEAN,
      },
      isManual: {
        type: Sequelize.BOOLEAN,
      }
    });
  
    return Item;
  };