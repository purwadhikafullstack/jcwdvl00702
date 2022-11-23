module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "order",
    {
      user_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      shipping_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      cart_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      total_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      //   payment: {
      //     allowNull: false,
      //     type: DataTypes.STRING,
      //   },
    },
    {}
  );
  // Order.associate = (models) => {
  //   Order.hasOne(models.Sales, { foreignKey: "order_id" });
  //   Order.hasOne(models.Order2, { foreignKey: "order_id" });
  // };
  return Order;
};
