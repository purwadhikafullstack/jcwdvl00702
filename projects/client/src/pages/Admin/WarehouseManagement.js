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
import { MoreHoriz, People, Search, PersonAdd, SortTwoTone, AddBusiness, Warehouse } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/WarehouseManagement.css';

class WarehouseManagement extends React.Component {
  state = {
    isSearch: false,
  };

  isSearchHandle = () => {
    this.setState({ ...this.state, isSearch: true });
  };

  isSearchHandleClose = () => {
    this.setState({ ...this.state, isSearch: false });
  };

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
                <Link to="/dashboard" className="whmanagement-banner-menu-link">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/user-list" className="whmanagement-banner-menu-link">
                  User List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/warehouse-management" className="whmanagement-banner-menu-link">
                  Warehouse Mng.
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-list" className="whmanagement-banner-menu-link">
                  Product List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-category" className="whmanagement-banner-menu-link">
                  Product Category
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-mutation" className="whmanagement-banner-menu-link">
                  Stock Mutation
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/order-list" className="whmanagement-banner-menu-link">
                  Order List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sales-report" className="whmanagement-banner-menu-link">
                  Sales Report
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-history" className="whmanagement-banner-menu-link">
                  Stock History
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  whManagementCard = (whName) => {
    return (
      <div className="wmc-main">
        <div className="wmc-image">
          <img
            src="https://i.pinimg.com/736x/74/28/e6/7428e6b80ecd09bb6590d7ae175d5400.jpg"
            className="wmc-product"
            alt="Product Image"
          />
        </div>
        <div className="wmc-detail">
          <div className="wmc-detail-name">Warehouse {whName} </div>
          <div className="wmc-detail-subname">Admin: Arnold Purnomo</div>
          <div className="wmc-detail-subname">Area 1 - DKI Jakarta</div>
          <div className="wmc-detail-bottom">
            <Button
              sx={{
                borderRadius: '20px',
                backgroundColor: 'rgb(255,153,153,0.9)',
                fontSize: '8px',
                fontFamily: 'Lora',
                color: 'black',
              }}
              variant="contained"
              className="wmc-detail-bottom-delete">
              Delete
            </Button>
            <Link to="/detail-warehouse" className="whmanagement-banner-menu-link">
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                className="wmc-detail-bottom-detail">
                Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="whmanagement-main">
          <div className="whmanagement-banner">
            <div className="whmanagement-banner-logo">
              <IconButton disabled>
                <Warehouse />
              </IconButton>
            </div>
            {this.state.isSearch ? (
              <>
                <ClickAwayListener onClickAway={this.isSearchHandleClose}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: 'Lora' }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                    className="whmanagement-search"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          <Search />
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </ClickAwayListener>
              </>
            ) : (
              <>
                <div className="whmanagement-banner-text">Warehouse List</div>
                <div className="whmanagement-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}

            <div className="whmanagement-banner-add">
              <Link to="/add-warehouse">
                <IconButton>
                  <AddBusiness />
                </IconButton>
              </Link>
            </div>
            <div className="whmanagement-banner-menu">{this.menuHandler()}</div>
          </div>
          <div className="whmanagement-content">
            {this.whManagementCard('A')}
            {this.whManagementCard('B')}
            {this.whManagementCard('C')}
            <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      </Container>
    );
  }
}

export default WarehouseManagement;
