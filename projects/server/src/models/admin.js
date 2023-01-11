module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define(
    'admin',
    {
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
      warehouse_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Admin.associate = (models) => {
    Admin.hasOne(models.Role, { foreignKey: 'user_id' });
  };
  return Admin;
};
