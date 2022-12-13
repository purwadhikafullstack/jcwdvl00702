module.exports = (sequelize, DataTypes) => {
  const Example = sequelize.define(
    'example',
    {
      warehouse_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      product_detail: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Example.associate = (models) => {
    Example.hasMany(models.Warehouse, { foreignKey: 'example' });
  };
  return Example;
};
