module.exports = (sequelize, DataTypes) => {
  const Stockmutation = sequelize.define(
    "stockmutation",
    {
      warehouse_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      warehouse_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_name: {
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
  return Stockmutation;
};
