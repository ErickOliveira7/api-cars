module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
      name_vehicle: {
        type: Sequelize.STRING,
      },
      description_vehicle: {
        type: Sequelize.STRING,
      },
      make_vehicle: {
        type: Sequelize.STRING,
      },
      quantity_vehicles: {
        type: Sequelize.INTEGER,
      },
      value_vehicle: {
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