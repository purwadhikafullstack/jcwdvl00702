const {
  models: { Customer, Address },
} = require('../models');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const multer = require('multer');
const customer = require('../models/customer');
// const upload = multer({dest: "../public/profileimages"})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/profileimages/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

//REGISTER
router.post('/register', async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newCustomer = new Customer({
      email: req.body.email,
      password: hashedPassword,
      is_verified: req.body.is_verified,
      is_banned: false,
      role: 'user',
      fullname: req.body.fullname,
      token: '',
      expired_time: 0,
      picture: '',
      social_login: false,
      customer_uid: req.body.customer_uid,
      role: 'user',
    });

    const customer = await newCustomer.save();
    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

//REGISTER VIA SOCIAL
router.post('/register-social', async (req, res) => {
  try {
    const newCustomer = new Customer({
      email: req.body.email,
      password: '',
      is_verified: req.body.is_verified,
      is_banned: false,
      role: 'user',
      fullname: req.body.fullname,
      token: '',
      expired_time: 0,
      picture: '',
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
router.post('/login', async (req, res) => {
  try {
    const customer = await Customer.findOne({ email: req.body.email });
    !customer && res.status(404).json('customer not found');

    const validPassword = await bcrypt.compare(req.body.password, customer.password);
    !validPassword && res.status(400).json('wrong password');

    res.status(200).json(customer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET PROFILE BY ID
router.get('/profile/:customer_uid', async (req, res) => {
  try {
    const response = await Customer.findOne({
      where: {
        customer_uid: req.params.customer_uid,
      },
    });

    let picPathArray = response.picture.split('\\');
    let picPath = 'http://localhost:3300/' + picPathArray[1] + '/' + picPathArray[2];
    response.picture = picPath;
    // localhost:3300/profileimages/newzealand.jpg
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

// UPDATE PROFILE
router.put('/edit-profile/:customer_uid', upload.single('picture'), async (req, res) => {
  console.log(req.file);
  await Customer.findOne({
    where: {
      customer_uid: req.params.customer_uid,
    },
  });
  try {
    let updateProfile = await Customer.update(
      {
        fullname: req.body.fullname,
        picture: req.file.path,
      },
      {
        where: {
          customer_uid: req.params.customer_uid,
        },
      }
    );
    res.status(201).json({
      message: 'Success',
      data: updateProfile,
    });
  } catch (error) {
    console.log(error.message);
  }
});

// UPDATE VERIFIED
router.put('/verify/:customer_uid', async (req, res) => {
  await Customer.findOne({
    where: {
      customer_uid: req.params.customer_uid,
    },
  });

  try {
    let updateVerify = await Customer.update(
      {
        is_verified: req.body.is_verified,
      },
      {
        where: {
          customer_uid: req.params.customer_uid,
        },
      }
    );
    res.status(201).json({ message: 'Success' });
  } catch (error) {
    console.log(error.message);
  }
});

// get user only
router.get('/user/:customer_uid', async (req, res) => {
  try {
    const response = await Customer.findOne({
      where: {
        customer_uid: req.params.customer_uid,
      },
      include: [
        {
          model: Address,
          required: true,
        },
      ],
    });

    let picPathArray = response.picture.split('\\');
    let picPath = 'http://localhost:3300/' + picPathArray[1] + '/' + picPathArray[2];
    response.picture = picPath;
    // localhost:3300/profileimages/newzealand.jpg
    res.json(response);
  } catch (error) {
    console.log(error);
  }
});

// UPDATE PROFILE
router.put('/edit-profile/:customer_uid', upload.single('picture'), async (req, res) => {
  console.log(req.file);
  await Customer.findOne({
    where: {
      customer_uid: req.params.customer_uid,
    },
  });
  try {
    let updateProfile = await Customer.update(
      {
        fullname: req.body.fullname,
        picture: req.file.path,
      },
      {
        where: {
          customer_uid: req.params.customer_uid,
        },
      }
    );
    res.status(201).json({
      message: 'Success',
      data: updateProfile,
    });
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
