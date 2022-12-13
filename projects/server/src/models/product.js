module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
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
      status: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      quantity_total: {
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
      cart_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      orderitem_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      history_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      picture: {
        allowNull: false,
        type: DataTypes.STRING,
      }
    },
    {}
  );
  Product.associate = (models) => {
    Product.hasMany(models.Warehouse, { foreignKey: "product_id" });
  };
  return Product;
};