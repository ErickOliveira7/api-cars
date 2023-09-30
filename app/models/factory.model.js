module.exports = (sequelize, Sequelize) => {
    const Factories = sequelize.define("factory", {
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

  