const express = require(`express`);
const cors = require(`cors`);
// const mysql = require("mysql2");
const db = require("./models");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const customerRoute = require("./routes/customer");
const bodyParser = require("body-parser");
const path = require("path");

dotenv.config();
const PORT = 3300;
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  "/profileimages",
  express.static(path.join(__dirname, "../public/profileimages"))
);

(async () => {
  await db.sequelize.sync();
})();

app.use("/api/customer", customerRoute);

app.listen(PORT, () => console.log(`API running:`, PORT));
