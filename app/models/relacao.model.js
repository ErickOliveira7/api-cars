module.exports = (sequelize, Sequelize) => {
    const Factories = sequelize.define("fabricantes", {
      carId: {
        type: Sequelize.INTEGER,
            references: { 
                model: 'items',
                key: 'id'
            }
      },
      nameFactory: {
        type: Sequelize.STRING,
      },
      addressFactory: {
        type: Sequelize.STRING,
      },
      yearVehicle: {
        type: Sequelize.INTEGER,
      },
      modelVehicle: {
        type: Sequelize.STRING,
      }

    });
  
    return Factories; 
  };

  