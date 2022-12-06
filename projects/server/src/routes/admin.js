const {models: { Customer }} = require("../models");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const customer = require("../models/customer");

//GET USER
router.get("/:customer_uid", async (req, res) => {
    try {
        await Customer.findOne({
            where: {
              customer_uid: req.body.customer_uid,
            },
          });
        const { password, updatedAt, ...other } = user._doc;
        res.status(200).json(other);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//DELETE USER (is_banned)
router.put("/:customer_uid", async (req, res)=>{
    if(req.body.role === "admin"){
        await Customer.findOne({
            where:{customer_uid:req.params.customer_uid}
        })
        try{
            await Customer.update(
                {is_banned:req.body.is_banned},
                {
                    where:{customer_uid:req.params.customer_uid}
                }
            )
            res.status(201).json({message:"Account Banned"})
        } catch(error){
            console.log(error.message)
        }
    }
})

//UPDATE USER
router.put("/:customer_uid", async (req, res)=>{
    if(req.body.role === "admin"){
        await Customer.findOne({
            where:{customer_uid:req.params.customer_uid}
        })
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try{
            await Customer.update(
                {
                    email:req.body.email,
                    fullname:req.body.fullname,
                    // password:req.body.password,
                    role:req.body.role,
                    picture:req.body.picture,
                }
            )
            res.status(201).json({message:"Account Updated"})
        } catch(error){
            console.log(error.message)
        }
    }
})

module.exports = router



