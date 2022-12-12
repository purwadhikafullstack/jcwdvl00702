import Axios from 'axios';
import { useState } from 'react';
import {
  ArrowBack,
  SportsSoccerOutlined,
  BusinessCenterOutlined,
  DirectionsBikeOutlined,
  HikingOutlined,
  HandymanOutlined,
  MonitorHeartOutlined,
  FitnessCenterOutlined,
} from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { Container, Button, IconButton, InputBase, Select, MenuItem, Box, TextField } from '@mui/material';
import '../../assets/styles/ProductAdd.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

export default function ProductAdd() {
  // setup UI
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const [isEdit, setIsEdit] = useState(false);
  const [selectIcon, setSelectIcon] = useState(0);
  const [picture, setPicture] = useState('');

  const [descript, setDescript] = useState('');

  const handleChange = (event) => {
    setDescript(event.target.value);
  };

  const loadPicture = (e) => {
    const image = e.target.files[0];
    setPicture(image);
  };

  // Add Product Setup

  // konfigurasi yup
  YupPassword(Yup);
  //isinialisasi formik
  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      product_detail: '',
      category: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
      product_detail: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
      category: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      const data = new FormData();
      data.append('warehouse_id', 'A');
      data.append('name', values.name);
      data.append('price', values.price);
      data.append('status', 'true');
      data.append('quantity', 10);
      data.append('quantity_total', 30);
      data.append('product_detail', values.product_detail);
      data.append('category', selectIcon);
      data.append('cart_id', '');
      data.append('orderitem_id', '');
      data.append('history_id', '');
      data.append('picture', picture);

      console.log(data);
      Axios.post('http://localhost:3300/api/product/add-product', data)
        .then(() => {
          alert('Product Added!');
        })
        .catch((error) => {
          alert('Nama Sudah Terpakai Atau Server Error');
        });
    },
  });

  const warehouseStock = (name) => {
    return (
      <div className="pdadd-stock-wh">
        <div className="pdadd-stock-name">Warehouse {name}</div>
        <div className="pdadd-stock-qty">
          {/* <div className="pdadd-stock-qty-input"> */}
          <InputBase
            sx={{ fontFamily: 'Lora', width: '100px' }}
            placeholder="Amount"
            className="pdadd-stock-qty-input"
          />
          {/* </div> */}
          <span className="pdadd-stock-qty-text">pcs</span>
        </div>
      </div>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="pdadd-main">
        <div className="pdadd-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <div className="adduser-banner-text">Add New Product</div>
        </div>

        <div className="pdadd-img">
          <Button variant="contained" component="label" sx={{ marginLeft: '130px', marginTop: '100px ' }}>
            Upload
            <input hidden accept="image/*" multiple type="file" id="uploadImg" onChange={loadPicture} />
          </Button>
        </div>

        <div className="pdadd-detail">
          <div className="pdadd-detail-title">
            <div className="pdadd-desc-title-1">
              <TextField
                id="outlined-basic"
                className="pdadd-desc-name-input"
                label="Product Name"
                variant="outlined"
                onChange={(e) => formik.setFieldValue('name', e.target.value)}
              />
              {formik.errors.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}
            </div>
            <div className="pdadd-desc-title-2-input">
              <Select
                sx={{ width: '150px', height: '38px', fontSize: '12px', padding: '0px' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectIcon}
                onChange={(e) => setSelectIcon(e.target.value)}>
                <MenuItem value={0}>
                  <em>Category</em>
                </MenuItem>
                <MenuItem value={'sports'}>
                  <SportsSoccerOutlined />
                  <span>Sports</span>
                </MenuItem>
                <MenuItem value={'bags'}>
                  <BusinessCenterOutlined />
                  <span>Bags</span>
                </MenuItem>
                <MenuItem value={'bikes'}>
                  <DirectionsBikeOutlined />
                  <span>Bikes</span>
                </MenuItem>
                <MenuItem value={'sportwear'}>
                  <HikingOutlined />
                  <span>Sportswear</span>
                </MenuItem>
                <MenuItem value={'accessories'}>
                  <HandymanOutlined />
                  <span>Accessories</span>
                </MenuItem>
                <MenuItem value={'health'}>
                  <MonitorHeartOutlined />
                  <span>Health</span>
                </MenuItem>
                <MenuItem value={'fitness'}>
                  <FitnessCenterOutlined />
                  <span>Fitness</span>
                </MenuItem>
              </Select>
            </div>
          </div>
          <hr className="splitter" />
          <div className="pdadd-desc">
            <div className="pdadd-desc-1">Description</div>
            <div className="pdadd-desc-2">
              <TextField
                sx={{ width: '100%', fontSize: '12px', padding: 0 }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Product Description"
                onChange={(e) => formik.setFieldValue('product_detail', e.target.value)}
              />
            </div>
          </div>
          {formik.errors.product_detail ? (
            <div className="alert alert-danger">{formik.errors.product_detail}</div>
          ) : null}
          <div className="pdadd-pricing">
            <div className="pdadd-price-title">Price</div>
            <div className="pdadd-price-input">
              <span className="pdadd-price-input-1">$</span>
              <InputBase
                sx={{ fontFamily: 'Lora', width: '100px' }}
                placeholder="Amount"
                className="pdadd-price-input-2"
                onChange={(e) => formik.setFieldValue('price', e.target.value)}
              />
            </div>
          </div>
          <hr className="splitter" />
        </div>

        <div className="pdadd-stock">
          {warehouseStock('A')}
          {warehouseStock('B')}
          {warehouseStock('C')}
        </div>

        <div className="pdadd-button">
          <button class="pdadd-button-2" type="submit" onClick={formik.handleSubmit}>
            Add New Product
          </button>
        </div>
      </div>
    </Container>
  );
}
