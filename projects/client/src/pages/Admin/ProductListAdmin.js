import React from 'react';
import {
  Button,
  InputAdornment,
  IconButton,
  Container,
  Menu,
  MenuItem,
  ClickAwayListener,
  InputBase,
  Stack,
  Pagination,
} from '@mui/material';
import { MoreHoriz, Search, SportsSoccerOutlined, AddBox, Ballot, SortTwoTone } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import '../../assets/styles/ProductListAdmin.css';

class ProductListAdmin extends React.Component {
  state = {
    productList: [],
    page: 0,
    pages: 0,
    sort: '',
    search: '',
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // page: 1,
    // maxPage: 0,
    // itemPerPage: 4,
    // keyWord: '',
>>>>>>> 5c462b23 (MWA 33)
=======
>>>>>>> 0aa7a103 (Features MWA34)
    isSearch: false,
  };

  isSearchHandle = () => {
    this.setState({ ...this.state, isSearch: true });
  };

  isSearchHandleClose = () => {
    this.setState({ ...this.state, isSearch: false });
  };

<<<<<<< HEAD
<<<<<<< HEAD
=======
  // filterHandler = () => {
  //   this.fetchProducts();
  //   this.setState({ ...this.state, keyWord: '' });
  // };

>>>>>>> 5c462b23 (MWA 33)
=======
>>>>>>> 0aa7a103 (Features MWA34)
  searchHandler = (event) => {
    this.setState({ ...this.state, search: event.target.value });
  };

  inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  // PRODUCT LIST SETUP

  // SETUP RENDER LIST PRODUCT

  fetchProducts = (page, sort, search) => {
    Axios.get(
      `http://localhost:3300/api/product/get-product?page=${page}&sort=${sort ? sort : this.state.sort}&search=${
        search ? search : this.state.search
      }`
    )
<<<<<<< HEAD
<<<<<<< HEAD
      .then((result) => {
=======

      // Axios.get(`http://localhost:3300/api/product/get-product/
      // ?searchQuery=${this.state.keyWord}`)

      .then((result) => {
        // this.setState({ productList: result.data, maxPage: Math.ceil(result.data.length / this.state.itemPerPage) });
        console.log(result);
>>>>>>> 5c462b23 (MWA 33)
=======
      .then((result) => {
>>>>>>> 0aa7a103 (Features MWA34)
        this.setState({
          ...this.state,
          productList: [...result.data.result],
          pages: result.data.pages,
          ...(sort && { sort: sort }),
          ...(search && { search: search }),
        });
      })
      .catch(() => {
        alert('Terjadi kesalahan di server');
      });
  };

  // DELETE BUTTON HANDLER
  deleteBtnHandler = (id) => {
    const confirmDelete = window.confirm('Delete Product?');
    if (confirmDelete) {
      Axios.delete(`http://localhost:3300/api/product/${id}`)
        .then(() => {
          this.fetchProducts(0);
        })
        .catch(() => {
          alert('Server Error!');
        });
    } else {
      alert('Cancel Delete Product');
    }
  };

  // EDIT BUTTON HANDLER
<<<<<<< HEAD
  detailBtnHandler = (id) => {
    this.props.history.push(`/products-management-detail/${id}`);
  };

<<<<<<< HEAD
=======
  // pageHandler = () => {
  //   if (this.state.page < this.state.maxPage) {
  //     this.setState({ page: this.state.page + 1 });
  //   } else if (this.state.page > 1) {
  //     this.setState({ page: this.state.page - 1 });
  //   }
  // };

>>>>>>> 5c462b23 (MWA 33)
=======
  editBtnHandler = (id) => {
    this.props.history.push(`/products-management-detail/${id}`);
  };

>>>>>>> 0aa7a103 (Features MWA34)
  componentDidMount() {
    this.fetchProducts(0);
  }

  menuHandler = () => {
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

  renderProduct = () => {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    // const beginningIndex = (this.state.page - 1) * this.state.itemPerPage;
    // const currentData = this.state.productList.slice(beginningIndex, beginningIndex + this.state.itemPerPage);

>>>>>>> 5c462b23 (MWA 33)
=======
>>>>>>> 0aa7a103 (Features MWA34)
    return this.state.productList.map((val, index) => {
      return (
        <div className="plc-main">
          <div className="plc-image">
            <img src={val.picture} className="plc-product" alt="Product Image" />
          </div>
          <div className="plc-detail">
            <div className="plc-detail-name">{val.name}</div>
            <div className="plc-detail-subname-2">Product ID: {val.id}</div>
            <div className="plc-detail-subname">
              <div className="plc-detail-subname-1">
                <SportsSoccerOutlined />
              </div>
              <div className="plc-detail-subname-2">{val.category}</div>
            </div>
            <div className="plc-detail-bottom">
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,153,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                onClick={() => this.deleteBtnHandler(val.id)}
                className="plc-detail-bottom-delete">
                Delete
              </Button>
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                className="plc-detail-bottom-detail"
<<<<<<< HEAD
                onClick={() => this.detailBtnHandler(val.id)}>
=======
                onClick={() => this.editBtnHandler(val.id)}>
>>>>>>> 5c462b23 (MWA 33)
                Detail
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log('prodlist', this.state.productList);

    return (
      <>
        <Container maxWidth="xs" sx={{ backgroundColor: 'white' }} classname="mobile">
<<<<<<< HEAD
<<<<<<< HEAD
=======
          {/* {console.log(this.state.productList)} */}
>>>>>>> 5c462b23 (MWA 33)
=======
>>>>>>> 0aa7a103 (Features MWA34)
          <div className="pladmin-main">
            <div className="pladmin-banner">
              <div className="pladmin-banner-logo">
                <IconButton disabled>
                  <Ballot />
                </IconButton>
              </div>
              {this.state.isSearch ? (
                <>
                  <ClickAwayListener onClickAway={this.isSearchHandleClose}>
                    <InputBase
                      sx={{ ml: 1, flex: 1, fontFamily: 'Lora' }}
                      placeholder="Search"
                      inputProps={{ 'aria-label': 'Search' }}
                      className="pladmin-search"
                      onChange={this.searchHandler}
<<<<<<< HEAD
<<<<<<< HEAD
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => this.fetchProducts(0, '', this.state.search)}>
=======
                      // name="keyWord"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            // onClick={this.filterHandler}
                            onClick={() => this.fetchProducts(0, '', this.state.search)}>
>>>>>>> 5c462b23 (MWA 33)
=======
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton edge="end" onClick={() => this.fetchProducts(0, '', this.state.search)}>
>>>>>>> 0aa7a103 (Features MWA34)
                            <Search />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </ClickAwayListener>
                </>
              ) : (
                <>
                  <div className="pladmin-banner-text">Product List</div>
                  <div className="pladmin-banner-search">
                    <IconButton onClick={this.isSearchHandle}>
                      <Search />
                    </IconButton>
                  </div>
                </>
              )}

              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="account-button" variant="contained" {...bindTrigger(popupState)}>
                      <IconButton>
                        <SortTwoTone />
                      </IconButton>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem
                        onClick={() => {
                          this.fetchProducts(0, 'name', '');
                          this.setState({ ...this.state, page: 0 });
                        }}
                        sx={{ fontFamily: 'Lora' }}>
                        {/* <img src="https://img.icons8.com/fluency-systems-filled/22/null/sort-numeric-up.png" /> */}
                        Name
                      </MenuItem>
                      <MenuItem onClick={() => this.fetchProducts(0, 'createdAt', '')} sx={{ fontFamily: 'Lora' }}>
                        {/* <img src="https://img.icons8.com/windows/24/null/sort-numeric-up-reversed.png" /> */}
                        ID
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>

              <div className="pladmin-banner-add">
                <Link to="/products-management-add">
                  <IconButton>
                    <AddBox />
                  </IconButton>
                </Link>
              </div>
              <div className="pladmin-banner-menu">{this.menuHandler()}</div>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
            <div className="pladmin-content">{this.renderProduct()}</div>
=======
            <div className="pladmin-content">
              {this.renderProduct()}
              {/* {this.state.productList.map((ListProduct, index) => (
                <div key={ListProduct.id}>
                  <div
                    className="
                      product-list">
                    <img src="https://cf.shopee.co.id/file/d7622a165c1b915b19e63e1ebd246ba4" alt="Product Image" />
                    <div>{ListProduct.name}</div>
                    <div>{ListProduct.price}</div>
                  </div>
                </div>
              ))} */}
              {/* <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
              <Pagination count={10} onChange={this.pageHandler} />
            </Stack> */}
            </div>
>>>>>>> 5c462b23 (MWA 33)
=======
            <div className="pladmin-content">{this.renderProduct()}</div>
>>>>>>> 0aa7a103 (Features MWA34)
          </div>
        </Container>

        <Container maxWidth="xs" className="mobile2">
          <Stack
            spacing={1}
            sx={{
              width: '110%',
              fontFamily: 'Lora',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Pagination
              count={this.state.pages}
              onChange={(e, value) => this.fetchProducts(value - 1, this.state.sort, '')}
            />
          </Stack>
        </Container>
      </>
    );
  }
}

export default ProductListAdmin;
