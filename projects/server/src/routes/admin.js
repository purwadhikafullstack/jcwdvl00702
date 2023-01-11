const {
  models: { Customer },
} = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const customer = require("../models/customer");

//GET ALL USER
router.get("/get-user", async (req, res) => {
  try {
    const allUser = await Customer.findAll();
    return res.status(200).send({ allUser });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.toString() });
  }
});

//GET ONE USER
router.get("/get-user-one/:customer_uid", async (req, res) => {
  try {
    const result = await Customer.findOne({
      where: {
        customer_uid: req.params.customer_uid,
      },
    });
    return res.status(200).send({ result });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.toString() });
  }
});

//UPDATE USER
router.put("/update/:customer_uid", async (req, res) => {
  const customer_uid = req.params.customer_uid;
  try {
    await Customer.update(req.body, { where: { customer_uid } });
    const customer = await Customer.findOne({ customer_uid });
    return res.status(200).send({ message: "updated" });
  } catch (err) {
    return res.status(500).json({ message: err.toString() });
  }
});

// //DELETE USER (is_banned)
// router.put("/:customer_uid", async (req, res)=>{
//     if(req.body.role === "admin"){
//         await Customer.findOne({
//             where:{customer_uid:req.params.customer_uid}
//         })
//         try{
//             await Customer.update(
//                 {is_banned:req.body.is_banned},
//                 {
//                     where:{customer_uid:req.params.customer_uid}
//                 }
//             )
//             res.status(201).json({message:"Account Banned"})
//         } catch(error){
//             console.log(error.message)
//         }
//     }
// })

module.exports = router;
