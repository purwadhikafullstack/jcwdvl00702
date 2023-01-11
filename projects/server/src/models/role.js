module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define(
    'role',
    {
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Role.associate = (models) => {
    Role.hasMany(models.Admin, { foreignKey: 'role_id' });
    Role.hasMany(models.Customer, { foreignKey: 'role_id' });
  };
  return Role;
};
