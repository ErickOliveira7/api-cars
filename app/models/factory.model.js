module.exports = (sequelize, Sequelize) => {
    const Factories = sequelize.define("fabricantes", {
      carId: {
        type: Sequelize.INTEGER,
            references: { 
                model: 'cars',
                key: 'id'
            }
      },
      nameFactory: {
        type: Sequelize.STRING,
      },
      addressFactory: {
        type: Sequelize.STRING,
      },
      yearFactory: {
        type: Sequelize.INTEGER,
      }
    });
  
    return Factories; 
  };

  