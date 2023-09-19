module.exports = (sequelize, Sequelize) => {
    const Factories = sequelize.define("fabricantes", {
      car_id: {
        type: Sequelize.INTEGER,
            references: { 
                model: 'items',
                key: 'id'
            }
      },
      name_factory: {
        type: Sequelize.STRING,
      },
      address_factory: {
        type: Sequelize.STRING,
      },
      year_vehicle: {
        type: Sequelize.INTEGER,
      },
      model_vehicle: {
        type: Sequelize.STRING,
      }

    });
  
    return Factories; 
  };

  