import Axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Add,
  ArrowBack,
  Remove,
  SportsSoccerOutlined,
  BusinessCenterOutlined,
  DirectionsBikeOutlined,
  HikingOutlined,
  HandymanOutlined,
  MonitorHeartOutlined,
  FitnessCenterOutlined,
} from '@mui/icons-material';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Button, IconButton, InputBase, Select, MenuItem, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import '../../assets/styles/ProductDetailAdmin.css';
import { useSelector } from 'react-redux';

export default function ProductDetailAdmin() {
  const history = useHistory();

  const { id } = useParams();

  const goBack = () => {
    history.goBack();
  };

  const [isEdit, setIsEdit] = useState(false);
  const [selectIcon, setSelectIcon] = useState(0);
  const [picture, setPicture] = useState('');
  const [preview, setPreview] = useState('');
  const [state, setState] = useState({});
<<<<<<< HEAD
<<<<<<< HEAD
  const [isSuperAdmin, setIsSuperAdmin] = useState(true);
=======
>>>>>>> 5c462b23 (MWA 33)
=======
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
>>>>>>> a9a833f5 (features MWA34)

  const [descript, setDescript] = useState('');

  const [resStock, setResStock] = useState([]);
  const [refreshStock, setRefreshStock] = useState([]);
  const [stockChange, SetStockChange] = useState({
    wh_id: '',
    count: '',
    number: 0,
  });

<<<<<<< HEAD
<<<<<<< HEAD
  const stateUsername = useSelector((state) => state.auth);

=======
>>>>>>> 5c462b23 (MWA 33)
=======
  const stateUsername = useSelector((state) => state.auth);

>>>>>>> cdbb567b (start MWA34)
  const handleChange = (event) => {
    setDescript(event.target.value);
  };

  useEffect(() => {
    console.log('tes');
    fetchProducts();
  }, [refreshStock]);

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // useEffect(() => {
  //   if (state.quantity_total !== resStock.reduce((partialSum, a) => partialSum + a, 0)) {
  //     fetchProducts();
  //   }
  // }, [resStock]);

>>>>>>> 5c462b23 (MWA 33)
=======
>>>>>>> a9a833f5 (features MWA34)
  // Mengambil data product berdasarkan ID dari backend
  const fetchProducts = () => {
    Axios.get(`http://localhost:3300/api/product/get-product/${id}`)
      .then((result) => {
        setState(result.data.getProduct);
        setResStock(result.data.stockWh);
<<<<<<< HEAD
      })
      .catch((err) => {
=======
        console.log('ini result data', result.data);
      })
      .catch((err) => {
        console.log(err);
        console.log('ini id untuk dikrim ke backend', id);
>>>>>>> 5c462b23 (MWA 33)
        alert('Terjadi kesalahan di server');
      });
  };

  // delete button handler
  const deleteBtnHandler = () => {
    const confirmDelete = window.confirm('Delete Product?');
    if (confirmDelete) {
      console.log('ini id: ', id);
      Axios.delete(`http://localhost:3300/api/product/${id}`)
        .then(() => {
          history.push(`/products-management-list`);
        })
        .catch(() => {
          alert('Server Error!');
        });
    } else {
      alert('Cancel Delete Product');
    }
  };

  // edit Product Setup
  const loadPicture = (e) => {
    const image = e.target.files[0];
    setPicture(image);
    setPreview(URL.createObjectURL(image));
  };

  // konfigurasi yup
  YupPassword(Yup);
  //isinialisasi formik
  const formik = useFormik({
    initialValues: {
      name: '',
      price: 0,
      product_detail: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
      product_detail: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!'),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);

      const data = new FormData();
      data.append('name', values.name);
      data.append('price', values.price);
      data.append('product_detail', values.product_detail);
      data.append('category', selectIcon);
      data.append('picture', picture);

      console.log(data);
      Axios.put(`http://localhost:3300/api/product/edit-product/${id}`, data)
        .then(() => {
          alert('Product Edited!');
          setIsEdit(false);
        })
        .catch((error) => {
          alert(error);
        });
    },
  });

<<<<<<< HEAD
<<<<<<< HEAD
  const changeStock = (name, count, number, requester) => {
=======
  const changeStock = (name, count, number) => {
>>>>>>> 5c462b23 (MWA 33)
=======
  const changeStock = (name, count, number, requester) => {
>>>>>>> cdbb567b (start MWA34)
    if (number >= 1) {
      Axios.patch(`http://localhost:3300/api/product/update-stock/${id}`, {
        wh_id: name + 1,
        count: count,
        number: number,
<<<<<<< HEAD
<<<<<<< HEAD
        requester: stateUsername.user.fullname,
=======
>>>>>>> 5c462b23 (MWA 33)
=======
        requester: stateUsername.user.fullname,
>>>>>>> cdbb567b (start MWA34)
      })
        .then((data) => {
          resStock[name] = data.data;
          setRefreshStock(resStock);
<<<<<<< HEAD
          alert('Stock Updated!');
        })
        .catch((error) => {
=======
          console.log('yes');
          alert('Stock Updated!');
        })
        .catch((error) => {
          console.log('gagal', error);
>>>>>>> 5c462b23 (MWA 33)
          alert('gagal');
        });
    } else {
      alert('Input stock amount first!');
    }
  };

  const warehouseStock = (index, number) => {
    return (
      <div className="pdadmin-stock-wh">
        <div className="pdadmin-stock-name">Warehouse {index + 1}</div>
        <div className="pdadmin-stock-qty">{resStock[index]} pcs</div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> a9a833f5 (features MWA34)
        {isSuperAdmin ? (
          <>
            <div className="pdadmin-stock-edit">
              <InputBase
                sx={{ fontFamily: 'Lora' }}
                placeholder="0"
                className="pdadmin-stock-text"
                onChange={(e) => {
                  number = e.target.value;
                }}
              />
              <IconButton
                className="pdadmin-stock-add"
                onClick={() => {
                  changeStock(index, 'add', number);
                }}>
                <Add />
              </IconButton>
            </div>
            <div className="pdadmin-stock-edit">
              <InputBase
                sx={{ fontFamily: 'Lora' }}
                placeholder="0"
                className="pdadmin-stock-text"
                onChange={(e) => {
                  number = e.target.value;
                }}
              />
              <IconButton
                className="pdadmin-stock-decrease"
                onClick={() => {
                  changeStock(index, 'reduce', number);
                }}>
                <Remove />
              </IconButton>
            </div>
          </>
        ) : null}
<<<<<<< HEAD
=======
        <div className="pdadmin-stock-edit">
          <InputBase
            sx={{ fontFamily: 'Lora' }}
            placeholder="0"
            className="pdadmin-stock-text"
            onChange={(e) => {
              number = e.target.value;
            }}
          />
          <IconButton
            className="pdadmin-stock-add"
            onClick={() => {
              changeStock(index, 'add', number);
            }}>
            <Add />
          </IconButton>
        </div>
        <div className="pdadmin-stock-edit">
          <InputBase
            sx={{ fontFamily: 'Lora' }}
            placeholder="0"
            className="pdadmin-stock-text"
            onChange={(e) => {
              number = e.target.value;
            }}
          />
          <IconButton
            className="pdadmin-stock-decrease"
            onClick={() => {
              changeStock(index, 'reduce', number);
            }}>
            <Remove />
          </IconButton>
        </div>
>>>>>>> 5c462b23 (MWA 33)
=======
>>>>>>> a9a833f5 (features MWA34)
      </div>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="pdadmin-main">
        <div className="pdadmin-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>

          {isEdit ? (
            <>
              <Button
                disabled
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,153,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                  marginRight: '5px',
                  marginLeft: '210px',
                }}
                variant="contained"
                className="pdadmin-banner-delete">
                Delete
              </Button>
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,255,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                onClick={formik.handleSubmit}
                className="pdadmin-banner-edit">
                Save
              </Button>
            </>
          ) : (
            <>
              {isSuperAdmin ? (
                <>
                  <Button
                    sx={{
                      borderRadius: '20px',
                      backgroundColor: 'rgb(255,153,153,0.9)',
                      fontSize: '8px',
                      fontFamily: 'Lora',
                      color: 'black',
                      marginRight: '5px',
                      marginLeft: '210px',
                    }}
                    variant="contained"
                    onClick={deleteBtnHandler}
                    className="pdadmin-banner-delete">
                    Delete
                  </Button>
                  <Button
                    sx={{
                      borderRadius: '20px',
                      backgroundColor: 'rgb(255,204,153,0.9)',
                      fontSize: '8px',
                      fontFamily: 'Lora',
                      color: 'black',
                    }}
                    variant="contained"
                    onClick={() => setIsEdit(true)}
                    className="pdadmin-banner-edit">
                    Edit
                  </Button>
                </>
              ) : null}
            </>
          )}
        </div>

        {isEdit ? (
          <>
            <img className="pdadmin-img" src={picture} alt="" />
            <Button variant="contained" component="label" sx={{ marginLeft: '130px', marginTop: '10px' }}>
              Change Photo
              <input hidden accept="image/*" multiple type="file" id="uploadImg" onChange={loadPicture} />
            </Button>
          </>
        ) : (
          <img className="pdadmin-img" src={state.picture} alt="Product" />
        )}

        {isEdit ? (
          <>
            <div className="pdadmin-detail">
              <div className="pdadmin-detail-title">
                <div className="pdadmin-desc-title-1">
                  <InputBase
                    sx={{ fontFamily: 'Lora' }}
                    placeholder={state.name}
                    className="pdadmin-desc-name-input"
                    onChange={(e) => formik.setFieldValue('name', e.target.value)}
                  />
                </div>
                {formik.errors.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}
                <div className="pdadmin-desc-title-2-input">
                  <Select
                    sx={{ width: '150px', height: '38px', fontSize: '12px', padding: '0px' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectIcon}
                    onChange={(e) => setSelectIcon(e.target.value)}>
                    <MenuItem value={0}>
                      <em>
                        <SportsSoccerOutlined />
                        <span>Sports</span>
                      </em>
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
              <div className="pdadmin-desc">
                <div className="pdadmin-desc-1">Description</div>
                <div className="pdadmin-desc-2">
                  <TextField
                    sx={{ width: '100%', fontSize: '12px', padding: 0 }}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder={state.product_detail}
                    onChange={(e) => formik.setFieldValue('product_detail', e.target.value)}
                  />
                </div>
              </div>
              {formik.errors.product_detail ? (
                <div className="alert alert-danger">{formik.errors.product_detail}</div>
              ) : null}
              <div className="pdadmin-pricing">
                <div className="pdadmin-price-title">Price</div>
                <div className="pdadmin-price-input">
                  <span className="pdadmin-price-input-1">$</span>
                  <InputBase
                    sx={{ fontFamily: 'Lora', width: '100px' }}
                    onChange={(e) => formik.setFieldValue('price', e.target.value)}
                    placeholder={state.price}
                    className="pdadmin-price-input-2"
                  />
                </div>
              </div>
              <hr className="splitter" />
            </div>
          </>
        ) : (
          <>
            <div className="pdadmin-detail">
              <div className="pdadmin-detail-title">
                <div className="pdadmin-desc-title-1">
                  <span className="pdadmin-desc-name">{state.name}</span>
                </div>
                <div className="pdadmin-desc-title-4">Product ID: {state.id}</div>
                <div className="pdadmin-desc-title-2">
                  <SportsSoccerOutlined />
                  <div className="pdadmin-desc-title-3">{state.category}</div>
                </div>
              </div>
              <hr className="splitter" />
              <div className="pdadmin-desc">
                <div className="pdadmin-desc-1">Description</div>
                <div className="pdadmin-desc-2">{state.product_detail}</div>
              </div>
              <div className="pdadmin-pricing">
                <div className="pdadmin-price-title">Price</div>
                <div className="pdadmin-price">${state.price}</div>
              </div>
              <hr className="splitter" />
            </div>
          </>
        )}

<<<<<<< HEAD
<<<<<<< HEAD
        <div className="pdadmin-stock">{resStock.map((item, index) => warehouseStock(index))}</div>
=======
        <div className="pdadmin-stock">
          {resStock.map((item, index) => warehouseStock(index))}
          {/* {warehouseStock(1)}
          {warehouseStock(2)}
          {warehouseStock(3)} */}
        </div>
>>>>>>> 5c462b23 (MWA 33)
=======
        <div className="pdadmin-stock">{resStock.map((item, index) => warehouseStock(index))}</div>
>>>>>>> a9a833f5 (features MWA34)
      </div>
    </Container>
  );
}
