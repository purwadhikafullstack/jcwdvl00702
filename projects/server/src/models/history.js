module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define(
    "history",
    {
      product_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      order_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  return History;
};
