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
      is_verified: false,
      is_banned: false,
      role: "user",
      fullname: "",
      token: "",
      expired_time: 0,
      picture: "",
    });

    const customer = await newCustomer.save();
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// module.exports = {
//   create: async (req, res) => {
//     if (req.body.email && req.body.password) {
//       const { email, password } = req.body;
//       await Customer.create({
//         email,
//         password,
//       });
//     } else {
//       res.send("Not added to database");
//     }
//   },
// };

module.exports = router;
