module.exports = (sequelize, DataTypes) => {
  const Warehouse = sequelize.define(
    'warehouse',
    {
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Warehouse.associate = (models) => {
    Warehouse.hasMany(models.Product, { foreignKey: 'warehouse_id' });
    Warehouse.hasOne(models.Admin, { foreignKey: 'warehouse_id' });
    // Warehouse.hasOne(models.Role, { foreignKey: 'warehouse_id' });
  };
  return Warehouse;
};
