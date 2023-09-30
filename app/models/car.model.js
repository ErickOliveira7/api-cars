module.exports = (sequelize, Sequelize) => {
    const Car = sequelize.define("cars", {
      nameVehicle: {
        type: Sequelize.STRING,
      },
      descriptionVehicle: {
        type: Sequelize.STRING,
      },
      modelVehicle: {
        type: Sequelize.STRING,
      },
      yearVehicle: {
        type: Sequelize.INTEGER,
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
  
    return Car;
  };