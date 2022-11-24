module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "sales",
    {
      order_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      total_price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  return Sales;
};
