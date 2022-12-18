module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('stock', {
    warehouse_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    product_id: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  });

  return Stock;
};
