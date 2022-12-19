const { BOOLEAN } = require("sequelize");
const { Customer } = require("./customer");
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "address",
    {
      customer_uid: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      address_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      province: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      postal_code: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      latitude: {
        type: DataTypes.STRING,
      },
      longitude: {
        type: DataTypes.STRING,
      },
      is_primary: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  // Address.associate = (models) => {
  //   Address.belongsTo(Customer)
  // }
  return Address;
};
