module.exports = (sequelize, DataTypes) => {
  const Orderitem = sequelize.define(
    "orderitem",
    {
      order_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      warehouse_id: {
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
  return Orderitem;
};
