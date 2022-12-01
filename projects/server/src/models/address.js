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
      is_primary: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  return Address;
};
