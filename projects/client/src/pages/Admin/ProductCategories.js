import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  MoreHoriz,
  Sell,
  SportsSoccerOutlined,
  BusinessCenterOutlined,
  DirectionsBikeOutlined,
  HikingOutlined,
  HandymanOutlined,
  MonitorHeartOutlined,
  FitnessCenterOutlined,
} from '@mui/icons-material';
import { useHistory, Link } from 'react-router-dom';
import {
  IconButton,
  InputBase,
  Container,
  Menu,
  MenuItem,
  Button,
  Select,
  Modal,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

import '../../assets/styles/ProductCategory.css';

export default function ProductCategory() {
  const history = useHistory();

  useEffect(() => {
    fetchCategories();
  }, []);

  const [setIcon, setSetIcon] = useState(0);
  const [picture, setPicture] = useState('');
  const [setAdd, setSetAdd] = useState(false);
  const [editedIndex, setEditedIndex] = useState('');
  const [delIndex, setDelIndex] = useState('');
  const [categoryList, setCategoryList] = useState([]);
  const [editName, setEditName] = useState('');

  const [openDel, setOpenDel] = useState(false, '');

  const loadPicture = (e) => {
    const image = e.target.files[0];
    setPicture(image);
  };

  const isEditHandle = (index) => {
    setEditedIndex(index);
  };

  const handleIconChange = (event) => {
    setSetIcon(event.target.value);
  };

  const isDel = (index) => {
    setDelIndex(index);
    setOpenDel(true);
  };

  const deleteBtnHandler = (id) => {
    Axios.delete(`http://localhost:3300/api/product/delete-category/${id}`)
      .then(() => {
        setOpenDel(false);
        fetchCategories();
      })
      .catch(() => {
        alert('Server Error!');
      });
  };

  const saveBtnHandler = (id) => {
    Axios.patch(`http://localhost:3300/api/product/edit-category/${id}`, {
      name: editName,
    })
      .then(() => {
        setEditedIndex('');
        fetchCategories();
      })
      .catch(() => {
        alert('Nama sudah terpakai');
      });
  };

  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!'),
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      const data = new FormData();

      data.append('name', values.name);
      data.append('image', picture);

      Axios.post('http://localhost:3300/api/product/add-category', data)
        .then(() => {
          alert('Category Added!');
          setSetAdd(false);
          fetchCategories();
        })
        .catch((error) => {
          alert('Nama sudah terpakai!');
        });
    },
  });

  const fetchCategories = () => {
    Axios.get('http://localhost:3300/api/product/get-category')
      .then((result) => {
        setCategoryList(result.data);
      })
      .catch((err) => {
        alert('Terjadi kesalahan di server');
      });
  };

  const menuHandler = () => {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <React.Fragment>
            <button className="account-button" variant="contained" {...bindTrigger(popupState)}>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem>
                <Link to="/dashboard" className="pladmin-banner-menu-link">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/user-list" className="pladmin-banner-menu-link">
                  User List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/warehouse-management" className="pladmin-banner-menu-link">
                  Warehouse Mng.
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-list" className="pladmin-banner-menu-link">
                  Product List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-category" className="pladmin-banner-menu-link">
                  Product Category
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-mutation" className="pladmin-banner-menu-link">
                  Stock Mutation
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/order-list" className="pladmin-banner-menu-link">
                  Order List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sales-report" className="pladmin-banner-menu-link">
                  Sales Report
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-history" className="pladmin-banner-menu-link">
                  Stock History
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  const categoryCard = () => {
    return categoryList.map((val, index) => {
      return (
        <>
          <div className="apc-card">
            {editedIndex === index ? (
              <>
                <img className="apc-card-icon" src={val.picture} alt="icon" />
                {/* <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={setIcon}
                  className="apc-card-icon-select"
                  onChange={handleIconChange}>
                  <MenuItem value={0}>
                    <em>
                      <img src={val.picture} />
                    </em>
                  </MenuItem>
                  {categoryList.map((val, index) => {
                    return (
                      <>
                        <MenuItem value={val.id}>
                          {val.name}
                          <img src={val.picture} />
                        </MenuItem>
                      </>
                    );
                  })}
                </Select> */}
                <InputBase
                  sx={{ ml: 1, width: '250px', border: '1px solid grey' }}
                  placeholder={val.name}
                  inputProps={{ 'aria-label': 'Search' }}
                  className="apc-card-input"
                  onChange={(e) => setEditName(e.target.value)}
                />
                <Button
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: 'rgb(153,255,255,0.9)',
                    fontSize: '8px',
                    fontFamily: 'Lora',
                    color: 'black',
                    marginLeft: '5px',
                  }}
                  variant="contained"
                  className="apc-card-edit"
                  onClick={() => saveBtnHandler(val.id)}>
                  Save
                </Button>
              </>
            ) : (
              <>
                {/* {val.picture} */}
                <img className="apc-card-icon" src={val.picture} alt="icon" />
                <div className="apc-card-text">{val.name}</div>
                <Button
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: 'rgb(255,153,153,0.9)',
                    fontSize: '8px',
                    fontFamily: 'Lora',
                    color: 'black',
                  }}
                  onClick={() => isDel(index)}
                  variant="contained"
                  className="apc-card-delete">
                  Delete
                </Button>
                <Dialog
                  open={openDel}
                  onClose={() => setOpenDel(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description">
                  <DialogTitle id="alert-dialog-title">{'Delete this Category'}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">Are you sure ?</DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={() => setOpenDel(false)}>No</Button>
                    <Button onClick={() => deleteBtnHandler(categoryList[delIndex].id)} autoFocus>
                      Yes
                    </Button>
                  </DialogActions>
                </Dialog>

                <Button
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: 'rgb(255,204,153,0.9)',
                    fontSize: '8px',
                    fontFamily: 'Lora',
                    color: 'black',
                    marginLeft: '5px',
                  }}
                  variant="contained"
                  className="apc-card-edit"
                  onClick={() => isEditHandle(index)}>
                  Edit
                </Button>
              </>
            )}
          </div>
        </>
      );
    });
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="apc-main">
        <div className="apc-banner">
          <IconButton disabled>
            <Sell />
          </IconButton>
          <div className="apc-banner-text">Product Category</div>
          <div className="apc-banner-menu">{menuHandler()}</div>
        </div>
        <div className="apc-content">
          {/* {categoryCard(<SportsSoccerOutlined />, 'Sports', 0)}
          {categoryCard(<BusinessCenterOutlined />, 'Bags', 1)}
          {categoryCard(<DirectionsBikeOutlined />, 'Bikes', 2)}
          {categoryCard(<HikingOutlined />, 'Sportswear', 3)}
          {categoryCard(<HandymanOutlined />, 'Accessories', 4)} */}
          {categoryCard()}
        </div>

        <button className="apc-add" onClick={() => setSetAdd(true)}>
          Add New Category
        </button>
        <Modal
          open={setAdd}
          onClose={() => setSetAdd(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              border: '2px solid #000',
              boxShadow: 24,
              p: 4,
            }}>
            <Button variant="contained" component="label" sx={{ marginLeft: '130px', marginTop: '100px ' }}>
              Upload
              <input hidden accept="image/*" multiple type="file" id="uploadImg" onChange={loadPicture} />
            </Button>
            {/* <Select
              sx={{ width: '80px' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={setIcon}
              className="apc-card-icon-select"
              onChange={handleIconChange}>
              <MenuItem value={0}>
                <em>Icon</em>
              </MenuItem>
              <MenuItem value={1}>
                <SportsSoccerOutlined />
              </MenuItem>
              <MenuItem value={2}>
                <BusinessCenterOutlined />
              </MenuItem>
              <MenuItem value={3}>
                <DirectionsBikeOutlined />
              </MenuItem>
              <MenuItem value={4}>
                <HikingOutlined />
              </MenuItem>
              <MenuItem value={5}>
                <HandymanOutlined />
              </MenuItem>
              <MenuItem value={6}>
                <MonitorHeartOutlined />
              </MenuItem>
              <MenuItem value={7}>
                <FitnessCenterOutlined />
              </MenuItem>
            </Select> */}

            <InputBase
              sx={{ ml: 1, border: '1px solid grey', backgroundColor: 'white', width: '220px' }}
              placeholder="Category Name"
              inputProps={{ 'aria-label': 'Search' }}
              className="apc-card-input"
              onChange={(e) => formik.setFieldValue('name', e.target.value)}
            />
            {formik.errors.name ? <div className="alert alert-danger">{formik.errors.name}</div> : null}

            <Button
              sx={{
                borderRadius: '20px',
                backgroundColor: 'rgb(153,255,255,0.9)',
                fontSize: '8px',
                fontFamily: 'Lora',
                color: 'black',
                marginLeft: '5px',
              }}
              variant="contained"
              className="apc-card-edit"
              onClick={formik.handleSubmit}>
              Add
            </Button>
          </Box>
        </Modal>
      </div>
    </Container>
  );
}
