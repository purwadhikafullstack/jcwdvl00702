module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define(
    "address",
    {
      user_id: {
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
      is_primary: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  return Address;
};
