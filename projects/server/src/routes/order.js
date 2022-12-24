const {
    models: { Order },
  } = require('../models');

const { where, Op } = require('sequelize');
const router = require('express').Router();

  // ADD ORDER

  router.post(`/add-order`, async (req, res) =>{
    console.log("ini req body", req.body)
    try {
            const newOrder = await Order.create(
                {
                customer_uid: req.body.customer_uid,
                cart_id: "",
                status: false,
                total_price: 0,
                shipping_price: 0,
                shipping_address: "",
                shipping_courier: "",
              }
              );
              
            //   return res.status(200).json(newOrder.id)


              console.log('ini new Order:', newOrder);
              const order = await newOrder.save()
              res.status(200).json(order);
    } catch (err) {
        res.status(500).json(err);
    }
  })


  // GET ORDER

  router.get('/get-order/:id', async (req, res) => {
    try {
        const getOrder = await Order.findOne({
            where: {
              customer_uid: req.params.id,
              // status false ini berarti hanya orderan yg belum selesai saja yg dikirim ke frontend
              status: false
            },
          });

      res.status(200).json(getOrder);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// add Address shipping

router.put('/edit-address/:id', async (req, res) => {
  await Order.findOne({
    where: {
      customer_uid: req.params.id,
      status: false
    },
  });

  try {
    let updateOrder = await Order.update(
      {
        shipping_address: req.body.shipping_address,
      },
      {
        where: {
          customer_uid: req.params.id,
          status: false
        },
      }
    );
    res.status(201).json({
      message: 'Success',
      data: updateOrder,
    });
  } catch (error) {
    console.log(error.message);
  }
});
// add shipping dan shipping price

router.put('/edit-shipping/:id', async (req, res) => {
  await Order.findOne({
    where: {
      customer_uid: req.params.id,
      status: false
    },
  });

  try {

    let updateOrder = await Order.update(
      {
        shipping_courier: req.body.shipping_courier,
        shipping_price: req.body.shipping_price
      },
      {
        where: {
          customer_uid: req.params.id,
          status: false
        },
      }
    );
    res.status(201).json({
      message: 'Success',
      data: updateOrder,
    });
  } catch (error) {
    console.log(error.message);
  }
});


module.exports = router;