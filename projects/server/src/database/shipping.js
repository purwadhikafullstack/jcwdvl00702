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
  return Shipping;
};
