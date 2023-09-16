module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("items", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.DOUBLE
      },
      isNew: {
        type: Sequelize.BOOLEAN
      },
      isManual: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Item;
  };