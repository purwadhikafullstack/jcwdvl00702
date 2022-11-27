module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "transaction",
    {
      order2_id: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      payment_checker: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {}
  );
  return Transaction;
};
