module.exports = (sequelize, DataTypes) => {
  const Stockhistory = sequelize.define(
    'stockhistory',
    {
      stock_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      stockmutation_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      warehouse_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      product_picture: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      math: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      quantity: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
<<<<<<< HEAD
      start: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      end: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
=======
>>>>>>> a9a833f5 (features MWA34)
      requester: {
        allowNull: false,
        type: DataTypes.STRING,
      },
<<<<<<< HEAD
      year: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      month: {
        allowNull: false,
        type: DataTypes.STRING,
      },
=======
>>>>>>> a9a833f5 (features MWA34)
    },
    {}
  );
  return Stockhistory;
};
