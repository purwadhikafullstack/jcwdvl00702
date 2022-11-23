module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define(
    "customer",
    {
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      fullname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      is_verified: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      token: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      expired_time: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      picture: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      is_banned: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  // Customer.associate = (models) => {
  //   Customer.hasOne(models.Address, { foreignKey: "user_id" });
  //   Customer.hasOne(models.Cart, { foreignKey: "user_id" });
  //   Customer.hasOne(models.Order, { foreignKey: "user_id" });
  // };
  return Customer; //user
};
