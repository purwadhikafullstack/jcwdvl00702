const {
  models: { Product, Stock, Stockmutation, Stockhistory },
} = require('../models');
const router = require('express').Router();
const multer = require('multer');
const { where, Op } = require('sequelize');
const stockhistory = require('../models/stockhistory');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/productimages/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// ADD Product
router.post('/add-product', upload.single('picture'), async (req, res) => {
  try {
    let getProductName = await Product.findAll();
    let checkBox = false;

    for (let i = 0; i < getProductName.length; i++) {
      if (req.body.name.toLowerCase() === getProductName[i].name.toLowerCase()) {
        checkBox = true;
        break;
      }
    }

    if (checkBox === true) {
      res.status(500).json(err);
    } else {
      const newProduct = await Product.create({
        name: req.body.name,
        price: req.body.price,
        quantity_total: req.body.quantity_total,
        product_detail: req.body.product_detail,
        category: req.body.category,
        picture: req.file.path,
      });
      const productId = await Product.findOne({
        where: {
          name: req.body.name,
        },
      });
      const stockData = [
        {
          warehouse_id: '1',
          product_id: productId.id,
          quantity: req.body.wh_1,
        },
        {
          warehouse_id: '2',
          product_id: productId.id,
          quantity: req.body.wh_2,
        },
        {
          warehouse_id: '3',
          product_id: productId.id,
          quantity: req.body.wh_3,
        },
      ];
      const newStock = await Stock.bulkCreate(stockData, { returning: true });
      res.status(200).json(newProduct);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product
router.get('/get-product', async (req, res) => {
  try {
    // let searchQuery = req.query.searchQuery || '';
    // console.log('req query ges', req.query.searchQuery);
    // let getProduct = await Product.findAll({
    //   where: {
    //     name: { [Op.like]: '%' + searchQuery + '%' },
    //   },
    // });

    // console.log('ini get Product', getProduct[0].picture);
    // console.log('ini lenght get product', getProduct.length);

    // for (let i = 0; i < getProduct.length; i++) {
    //   let picPathArray = getProduct[i].picture.split('\\');
    //   let picPath = 'http://localhost:3300/' + picPathArray[1] + '/' + picPathArray[2];
    //   getProduct[i].picture = picPath;
    // }

    // res.status(200).json(getProduct);

    const page = parseInt(req.query.page) || 0;
    const limit = 3;
    const search = req.query.search || '';
    const offset = limit * page;
    const productLength = await Product.findAll({});

    const sort = req.query.sort || 'id';

    const result = await Product.findAll({
      limit: limit,
      offset: page * limit,
      order: [[sort, 'ASC']],
      ...(req.query.search && {
        where: {
          name: {
            [Op.like]: `%${req.query.search}%`,
          },
        },
      }),
    });
    const resultCount = await Product.findAll({
      // offset: page * limit,
      // order: [[sort, 'ASC']],
      ...(req.query.search && {
        where: {
          name: {
            [Op.like]: `%${req.query.search}%`,
          },
        },
      }),
    });
    const pages = Math.ceil(resultCount.length / limit);

    res.status(200).json({
      result: result,
      pages: pages,
      page: page,
      order: sort,
      search: search,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Product DETAIL By ID

router.get('/get-product/:id', async (req, res) => {
  try {
    const getProduct = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    let picPathArray = getProduct.picture.split('/');
    let picPath = 'http://localhost:3300/' + picPathArray[1] + '/' + picPathArray[2];
    getProduct.picture = picPath;

    const getStock = await Stock.findAll({
      where: {
        product_id: req.params.id,
      },
    });
    const stockWh = [getStock[0].quantity, getStock[1].quantity, getStock[2].quantity];

    res.status(200).json({ getProduct, stockWh });
  } catch (err) {
    res.status(500).json(err);
    console.log('err', err);
  }
});

//delete a product
router.delete('/:id', async (req, res) => {
  try {
    console.log('ini id nya woi', req.params.id);
    const id = req.params.id;
    const deleteProduct = await Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).json(deleteProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

// edit product

router.put('/edit-product/:id', upload.single('picture'), async (req, res) => {
  await Product.findOne({
    where: {
      id: req.params.id,
    },
  });

  try {
    let updateProduct = await Product.update(
      {
        name: req.body.name,
        price: req.body.price,
        product_detail: req.body.product_detail,
        category: req.body.category,
        picture: req.file.path,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(201).json({
      message: 'Success',
      data: updateProduct,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// UPDATE STOCK

router.patch('/update-stock/:id', async (req, res) => {
  const theProduct = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  const theStock = await Stock.findOne({
    where: {
      warehouse_id: req.body.wh_id,
      product_id: req.params.id,
    },
  });
  // const stockId = await Stock.findOne({
  //   where: {
  //     warehouse_id: req.body.wh_id,
  //     product_id: req.params.id,
  //   },
  // });

  try {
    if (req.body.count === 'add') {
      const updateStock = await Product.update(
        {
          quantity_total: theProduct.quantity_total + parseInt(req.body.number),
        },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
          plain: true,
        }
      );
      const changeStock = await Stock.update(
        {
          quantity: theStock.quantity + parseInt(req.body.number),
        },
        {
          where: {
            warehouse_id: req.body.wh_id,
            product_id: req.params.id,
          },
          returning: true,
          plain: true,
        }
      );
      const newMutation = await Stockhistory.create({
        stock_id: theStock.id,
        stockmutation_id: 'update_stock',
        warehouse_id: theStock.warehouse_id,
        product_id: theStock.product_id,
        product_name: theProduct.name,
        product_picture: theProduct.picture,
        math: '+',
        quantity: parseInt(req.body.number),
        requester: 'super_admin',
      });
    } else {
      const updateStock = await Product.update(
        {
          quantity_total: theProduct.quantity_total - parseInt(req.body.number),
        },
        {
          where: {
            id: req.params.id,
          },
          returning: true,
          plain: true,
        }
      );
      const changeStock = await Stock.update(
        {
          quantity: theStock.quantity - parseInt(req.body.number),
        },
        {
          where: {
            warehouse_id: req.body.wh_id,
            product_id: req.params.id,
          },
          returning: true,
          plain: true,
        }
      );
      const newMutation = await Stockhistory.create({
        stock_id: theStock.id,
        stockmutation_id: 'update_stock',
        warehouse_id: theStock.warehouse_id,
        product_id: theStock.product_id,
        product_name: theProduct.name,
        product_picture: theProduct.picture,
        math: '-',
        quantity: parseInt(req.body.number),
        requester: 'super_admin',
      });
    }
    const endStock = await Stock.findOne({
      where: {
        warehouse_id: req.body.wh_id,
        product_id: req.params.id,
      },
    });

    res.status(201).json(endStock.dataValues.quantity);
  } catch (err) {
    res.status(500).json(err);
    console.log('err', err);
  }
});

// GET STOCK MUTATION LIST

router.get('/get-mutation', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = 3;
    const search = req.query.search || '';
    const offset = limit * page;
    const productLength = await Stockmutation.findAll({});

    const sort = req.query.sort || 'DESC';
    const filter = req.query.filter || '';
    const myWh = req.query.mywh;

    const result = await Stockmutation.findAll({
      where: {
        move_type: filter,
        [Op.or]: [{ warehouse_id: myWh }, { requester: myWh }],
      },
      limit: limit,
      offset: page * limit,
      order: [['createdAt', sort]],
      ...(req.query.search && {
        where: {
          product_id: {
            [Op.like]: `%${req.query.search}%`,
          },
        },
      }),
    });
    const resultCount = await Stockmutation.findAll({
      where: {
        move_type: filter,
        [Op.or]: [{ warehouse_id: myWh }, { requester: myWh }],
      },
      // offset: page * limit,
      // order: [[sort, 'ASC']],
      ...(req.query.search && {
        where: {
          product_id: {
            [Op.like]: `%${req.query.search}%`,
          },
        },
      }),
    });
    const pages = Math.ceil(resultCount.length / limit);

    res.status(200).json({
      result: result,
      pages: pages,
      page: page,
      order: sort,
      search: search,
      filter: filter,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// STOCK MUTATION

router.post('/stock-mutation', async (req, res) => {
  const stockFrom = await Stock.findOne({
    where: {
      warehouse_id: req.body.from,
      product_id: req.body.product,
    },
  });
  const stockTo = await Stock.findOne({
    where: {
      warehouse_id: req.body.to,
      product_id: req.body.product,
    },
  });
  const theProduct = await Product.findOne({
    where: {
      id: req.body.product,
    },
  });

  const mutationData = {
    stock_id: stockFrom.id,
    warehouse_id: req.body.from,
    product_id: req.body.product,
    product_name: theProduct.name,
    // product_picture: '/projects/server/' + theProduct.picture,
    product_picture: theProduct.picture,
    quantity: parseInt(req.body.quantity),
    requester: req.body.to,
    status: 'waiting',
    move_type: 'manual',
  };

  try {
    const newMutation = await Stockmutation.create(mutationData);
    res.status(200).json({ theProduct, stockFrom });
    console.log('res be', res);
  } catch (err) {
    res.status(500).json(err);
    console.log('err be', err);
  }
});

// RESPOND MUTATION - MANUAL

router.patch('/stock-mutation', async (req, res) => {
  const theMutation = await Stockmutation.findOne({
    where: {
      id: req.body.mutation,
    },
  });
  const theStockFrom = await Stock.findOne({
    where: {
      product_id: theMutation.product_id,
      warehouse_id: theMutation.warehouse_id,
    },
  });
  const theStockTo = await Stock.findOne({
    where: {
      product_id: theMutation.product_id,
      warehouse_id: theMutation.requester,
    },
  });
  const historyData = [
    {
      stock_id: theStockFrom.id,
      stockmutation_id: theMutation.id,
      warehouse_id: theStockFrom.warehouse_id,
      product_id: theMutation.product_id,
      product_name: theMutation.product_name,
      product_picture: theMutation.product_picture,
      math: '-',
      quantity: theMutation.quantity,
      requester: theMutation.requester,
    },
    {
      stock_id: theStockTo.id,
      stockmutation_id: theMutation.id,
      warehouse_id: theStockTo.warehouse_id,
      product_id: theMutation.product_id,
      product_name: theMutation.product_name,
      product_picture: theMutation.product_picture,
      math: '+',
      quantity: theMutation.quantity,
      requester: theMutation.requester,
    },
  ];
  const historyDataAlternate = [
    {
      stock_id: theStockFrom.id,
      stockmutation_id: theMutation.id,
      warehouse_id: theStockFrom.warehouse_id,
      product_id: theMutation.product_id,
      product_name: theMutation.product_name,
      product_picture: theMutation.product_picture,
      math: '-',
      quantity: theStockFrom.quantity,
      requester: theMutation.requester,
    },
    {
      stock_id: theStockTo.id,
      stockmutation_id: theMutation.id,
      warehouse_id: theStockTo.warehouse_id,
      product_id: theMutation.product_id,
      product_name: theMutation.product_name,
      product_picture: theMutation.product_picture,
      math: '+',
      quantity: theStockFrom.quantity,
      requester: theMutation.requester,
    },
  ];

  if (req.body.respond === 'reject') {
    try {
      const changeMutation = await Stockmutation.update(
        {
          status: 'canceled',
        },
        {
          where: {
            id: req.body.mutation,
          },
          returning: true,
          plain: true,
        }
      );
      res.status(200).json({ historyData });
      console.log('accept res', res);
    } catch (err) {
      res.status(500).json(err);
      console.log('err', err);
    }
  } else if (req.body.respond === 'accept') {
    if (theStockFrom.quantity >= theMutation.quantity) {
      try {
        const changeMutation = await Stockmutation.update(
          {
            status: 'done',
          },
          {
            where: {
              id: req.body.mutation,
            },
            returning: true,
            plain: true,
          }
        );
        const changeStockFrom = await Stock.update(
          {
            quantity: theStockFrom.quantity - theMutation.quantity,
          },
          {
            where: {
              id: theStockFrom.id,
            },
            returning: true,
            plain: true,
          }
        );
        const changeStockTo = await Stock.update(
          {
            quantity: theStockTo.quantity + theMutation.quantity,
          },
          {
            where: {
              id: theStockTo.id,
            },
            returning: true,
            plain: true,
          }
        );
        const newHistory = await Stockhistory.bulkCreate(historyData, { returning: true });
        res.status(200).json({ historyData });
        console.log('accept res', res);
      } catch (err) {
        res.status(500).json(err);
        console.log('err', err);
      }
    } else {
      try {
        const changeMutation = await Stockmutation.update(
          {
            status: 'done',
            quantity: theStockFrom.quantity,
          },
          {
            where: {
              id: req.body.mutation,
            },
            returning: true,
            plain: true,
          }
        );
        const changeStockFrom = await Stock.update(
          {
            quantity: theStockFrom.quantity - theStockFrom.quantity,
          },
          {
            where: {
              id: theStockFrom.id,
            },
            returning: true,
            plain: true,
          }
        );
        const changeStockTo = await Stock.update(
          {
            quantity: theStockTo.quantity + theStockFrom.quantity,
          },
          {
            where: {
              id: theStockTo.id,
            },
            returning: true,
            plain: true,
          }
        );

        const newHistory = await Stockhistory.bulkCreate(historyDataAlternate, { returning: true });

        const message = `Mutation success but amount available is only ` + theStockFrom.quantity + ` pcs.`;
        res.status(200).json({ historyDataAlternate, message });
      } catch (err) {
        res.status(500).json(err);
        console.log('err', err);
      }
    }
  }
});

module.exports = router;

// Maria Pagination - Search - Sort

// const {
//   models: { Example },
// } = require('../models');
// const router = require('express').Router();
// const customer = require('../models/example');
// // const { Sequelize, Op } = require('sequelize');
// const Sequelize = require('sequelize');
// const Op = Sequelize.Op;

// router.get('/get', async (req, res) => {
//   const page = parseInt(req.query.page) || 0;
//   const limit = 2;
//   const search = req.query.search || '';
//   const offset = limit * page;
//   const exampleLength = await Example.findAll({});

//   const sort = req.query.sort || 'id';

//   const result = await Example.findAll({
//     limit: limit,
//     offset: page * limit,
//     order: [[sort, 'ASC']],
//     ...(req.query.search && {
//       where: {
//         name: {
//           [Op.like]: `%${req.query.search}%`,
//         },
//       },
//     }),
//   });
//   const resultCount = await Example.findAll({
//     // offset: page * limit,
//     // order: [[sort, 'ASC']],
//     ...(req.query.search && {
//       where: {
//         name: {
//           [Op.like]: `%${req.query.search}%`,
//         },
//       },
//     }),
//   });
//   const pages = Math.ceil(resultCount.length / limit);

//   res.json({
//     result: result,
//     pages: pages,
//     page: page,
//     order: sort,
//     search: search,
//   });
// });

// module.exports = router;
