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
import { MoreHoriz, Search, SportsSoccerOutlined, AddBox, Ballot } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';

import '../../assets/styles/ProductListAdmin.css';

class ProductListAdmin extends React.Component {
  state = {
    productList: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 4,
    keyWord: '',
    isSearch: false,
  };

  isSearchHandle = () => {
    this.setState({ ...this.state, isSearch: true });
  };

  isSearchHandleClose = () => {
    this.setState({ ...this.state, isSearch: false });
  };

  filterHandler = () => {
    this.fetchProducts();
    this.setState({ ...this.state, keyWord: '' });
  };

  inputHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  // Product list Setup

  // Setup Render list Product

  fetchProducts = () => {
    Axios.get(`http://localhost:3300/api/product/get-product/?searchQuery=${this.state.keyWord}`)
      .then((result) => {
        this.setState({ productList: result.data, maxPage: Math.ceil(result.data.length / this.state.itemPerPage) });
        console.log(this.state.productList);
      })
      .catch(() => {
        alert('Terjadi kesalahan di server');
      });
  };

  // delete button handler
  deleteBtnHandler = (id) => {
    const confirmDelete = window.confirm('Delete Product?');
    if (confirmDelete) {
      Axios.delete(`http://localhost:3300/api/product/${id}`)
        .then(() => {
          this.fetchProducts();
        })
        .catch(() => {
          alert('Server Error!');
        });
    } else {
      alert('Cancel Delete Product');
    }
  };

  // edit buton handler
  editBtnHandler = (id) => {
    this.props.history.push(`/products-management-detail/${id}`);
  };

  pageHandler = () => {
    if (this.state.page < this.state.maxPage) {
      this.setState({ page: this.state.page + 1 });
    } else if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  componentDidMount() {
    this.fetchProducts();
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
    const beginningIndex = (this.state.page - 1) * this.state.itemPerPage;
    const currentData = this.state.productList.slice(beginningIndex, beginningIndex + this.state.itemPerPage);

    return currentData.map((val) => {
      return (
        <div className="plc-main">
          <div className="plc-image">
            <img src={val.picture} className="plc-product" alt="Product Image" />
          </div>
          <div className="plc-detail">
            <div className="plc-detail-name">{val.name}</div>
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
                onClick={() => this.editBtnHandler(val.id)}>
                Edit
              </Button>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        {console.log(this.state.productList)}
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
                    onChange={this.inputHandler}
                    name="keyWord"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end" onClick={this.filterHandler}>
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
            <div className="pladmin-banner-add">
              <Link to="/add-user">
                <IconButton>
                  <AddBox />
                </IconButton>
              </Link>
            </div>
            <div className="pladmin-banner-menu">{this.menuHandler()}</div>
          </div>
          <div className="pladmin-content">
            {this.renderProduct()}
            <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
              <Pagination count={10} onChange={this.pageHandler} />
            </Stack>
          </div>
        </div>
      </Container>
    );
  }
}

export default ProductListAdmin;
