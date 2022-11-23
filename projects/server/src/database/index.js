const dbConfig = require("../config/db-config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Customer = require("./customer")(sequelize, Sequelize.DataTypes);
db.models.Address = require("./address")(sequelize, Sequelize.DataTypes);
db.models.Cart = require("./cart")(sequelize, Sequelize.DataTypes);
db.models.Order = require("./order")(sequelize, Sequelize.DataTypes);
db.models.Shipping = require("./shipping")(sequelize, Sequelize.DataTypes);
db.models.Sales = require("./sales")(sequelize, Sequelize.DataTypes);
db.models.Warehouse = require("./warehouse")(sequelize, Sequelize.DataTypes);
db.models.Admin = require("./admin")(sequelize, Sequelize.DataTypes);
db.models.Stockmutation = require("./stockmutation")(
  sequelize,
  Sequelize.DataTypes
);
db.models.Product = require("./product")(sequelize, Sequelize.DataTypes);
db.models.Transaction = require("./transaction")(
  sequelize,
  Sequelize.DataTypes
);
db.models.History = require("./history")(sequelize, Sequelize.DataTypes);
db.models.Orderitem = require("./orderitem")(sequelize, Sequelize.DataTypes);

module.exports = db;
