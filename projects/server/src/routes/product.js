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

// ADD PRODUCT
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

// GET PRODUCT LIST
router.get('/get-product', async (req, res) => {
  try {
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

// GET PRODUCT DETAIL BY ID
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
  }
});

// DELETE PRODUCT
router.delete('/:id', async (req, res) => {
  try {
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

// EDIT PRODUCT
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
  } catch (error) {}
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
  const theDate = new Date();

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
        start: theStock.quantity,
        end: parseInt(theStock.quantity) + parseInt(req.body.number),
        requester: 'super_admin',
        year: theDate.getFullYear(),
        month: theDate.getMonth() + 1,
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
        start: theStock.quantity,
        end: parseInt(theStock.quantity) - parseInt(req.body.number),
        requester: 'super_admin',
        year: theDate.getFullYear(),
        month: theDate.getMonth() + 1,
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

    const resultCount = await Stockmutation.findAll({
      where: {
        move_type: filter,
        [Op.or]: [{ warehouse_id: myWh }, { requester: myWh }],
      },
      ...(req.query.search && {
        where: {
          product_id: {
            [Op.eq]: `%${req.query.search}%`,
          },
        },
      }),
    });
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
            [Op.eq]: `%${req.query.search}%`,
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
    product_picture: theProduct.picture,
    quantity: parseInt(req.body.quantity),
    requester: req.body.to,
    status: 'waiting',
    move_type: 'manual',
  };

  try {
    const newMutation = await Stockmutation.create(mutationData);
    res.status(200).json({ theProduct, stockFrom });
  } catch (err) {
    res.status(500).json(err);
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
  const theProduct = await Product.findOne({
    where: {
      id: theMutation.product_id,
    },
  });
  const theDate = new Date();
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
      start: theStockFrom.quantity,
      end: theStockFrom.quantity - parseInt(theMutation.quantity),
      requester: theMutation.requester,
      year: theDate.getFullYear(),
      month: theDate.getMonth() + 1,
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
      start: theStockTo.quantity,
      end: theStockTo.quantity + parseInt(theMutation.quantity),
      requester: theMutation.requester,
      year: theDate.getFullYear(),
      month: theDate.getMonth() + 1,
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
      start: theStockFrom.quantity,
      end: theStockFrom.quantity - parseInt(theStockFrom.quantity),
      requester: theMutation.requester,
      year: theDate.getFullYear(),
      month: theDate.getMonth() + 1,
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
      start: theStockTo.quantity,
      end: theStockTo.quantity + parseInt(theStockFrom.quantity),
      requester: theMutation.requester,
      year: theDate.getFullYear(),
      month: theDate.getMonth() + 1,
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
    } catch (err) {
      res.status(500).json(err);
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
      } catch (err) {
        res.status(500).json(err);
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
      }
    }
  }
});

// GET STOCK HISTORY LIST
router.get('/get-stock-history', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = 3;
    const search = req.query.search || '';
    const offset = limit * page;
    const productLength = await Product.findAll({});
    const sort = req.query.sort || 'id';

    const resultCount = await Product.findAll({
      ...(req.query.search && {
        where: {
          [Op.or]: [
            {
              id: {
                [Op.eq]: req.query.search,
              },
            },
            {
              name: {
                [Op.like]: `%${req.query.search}%`,
              },
            },
          ],
        },
      }),
    });
    const result = await Product.findAll({
      limit: limit,
      offset: page * limit,
      order: [[sort, 'ASC']],
      ...(req.query.search && {
        where: {
          [Op.or]: [
            {
              id: {
                [Op.eq]: req.query.search,
              },
            },
            {
              name: {
                [Op.like]: `%${req.query.search}%`,
              },
            },
          ],
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

// GET STOCK HISTORY DETAIL BY ID
router.get('/product-stock-history/:id', async (req, res) => {
  const theHistory = await Stockhistory.findAll({
    where: {
      product_id: req.params.id,
    },
  });
  const getProduct = await Product.findOne({
    where: {
      id: req.params.id,
    },
  });
  const theYear = req.query.year;
  const theMonth = req.query.month;

  try {
    let picPathArray = getProduct.picture.split('/');
    let picPath = 'http://localhost:3300/' + picPathArray[1] + '/' + picPathArray[2];
    getProduct.picture = picPath;

    const getHistory = await Stockhistory.findAll({
      where: {
        product_id: req.params.id,
        year: theYear,
        month: theMonth,
      },
    });

    res.status(200).json({ getProduct, getHistory });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
