const {
  models: { Customer },
} = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newCustomer = new Customer({
      email: req.body.email,
      password: hashedPassword,
      is_verified: req.body.is_verified,
      is_banned: false,
      role: "user",
      fullname: req.body.fullname,
      token: "",
      expired_time: 0,
      picture: "",
      social_login: false,
      customer_uid: req.body.customer_uid,
    });

    const customer = await newCustomer.save();
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//REGISTER VIA SOCIAL
router.post("/register-social", async (req, res) => {
  try {
    const newCustomer = new Customer({
      email: req.body.email,
      password: "",
      is_verified: req.body.is_verified,
      is_banned: false,
      role: "user",
      fullname: req.body.fullname,
      token: "",
      expired_time: 0,
      picture: "",
      social_login: true,
      customer_uid: req.body.customer_uid,

    });

    const customer = await newCustomer.save();
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email });
    !customer && res.status(404).json("customer not found");

    const validPassword = await bcrypt.compare(
      req.body.password,
      customer.password
    );
    !validPassword && res.status(400).json("wrong password");

    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//NEW REGISTER PASSWORD
router.patch("/new-password", async (req, res) => {});

module.exports = router;
