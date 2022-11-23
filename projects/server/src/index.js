const express = require(`express`);
const cors = require(`cors`);
const mysql = require("mysql2");

const PORT = 3300;
const app = express();

app.use(cors());
app.use(express.json());

// const { karyawanRouters } = require(`./routers`);
// app.use(`/karyawan`, karyawanRouters);

const db = mysql.createConnection({
  host: `localhost`,
  user: `root`,
  password: `jcwdvl07`,
  database: `db_ecom`,
  port: 3306,
  multipleStatements: true,
});

db.connect((err) => {
  if (err) {
    return console.error(`error : ${err.message}`);
  }
  console.log(`Connected to MySQL Server`);
});

app.get(`/`, (req, res) => {
  res.status(200).send(`<h4>Integrated mysql with express</h4>`);
});

app.get("/customer", (req, res) => {
  let scriptQuery = "Select * from customer";
  db.query(scriptQuery, (err, results) => {
    if (err) res.status(500).send(err);
    res.status(200).send(results);
  });
});

app.listen(PORT, () => console.log(`API running:`, PORT));
