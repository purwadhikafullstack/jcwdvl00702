module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define(
    "warehouse",
    {
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  return Warehouse;
};
