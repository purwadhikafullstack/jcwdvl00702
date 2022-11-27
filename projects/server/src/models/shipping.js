module.exports = (sequelize, DataTypes) => {
  const Shipping = sequelize.define(
    "shipping",
    {
      area: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Shipping.associate = (models) => {
    Shipping.hasOne(models.Order, { foreignKey: "shipping_id" });
  };
  return Shipping;
};
