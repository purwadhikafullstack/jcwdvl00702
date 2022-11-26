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
import { MoreHoriz, People, Search, SportsSoccerOutlined, AddBox } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/ProductListAdmin.css';

class ProductListAdmin extends React.Component {
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
              <MenuItem>
                <Link to="/assign-task" className="pladmin-banner-menu-link">
                  Assign Task
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  prodlistCard = () => {
    return (
      <div className="plc-main">
        <div className="plc-image">
          <img
            src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
            className="plc-product"
            alt="Product Image"
          />
        </div>
        <div className="plc-detail">
          <div className="plc-detail-name">Kocheng Kochengan Lucu Aja</div>
          <div className="plc-detail-subname">
            <div className="plc-detail-subname-1">
              <SportsSoccerOutlined />
            </div>
            <div className="plc-detail-subname-2">Sports</div>
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
              className="plc-detail-bottom-delete">
              Delete
            </Button>
            <Link to="/products-management-detail" className="pladmin-banner-menu-link">
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                className="plc-detail-bottom-detail">
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
        <div className="pladmin-main">
          <div className="pladmin-banner">
            <div className="pladmin-banner-logo">
              <IconButton disabled>
                <People />
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
                <div className="pladmin-banner-text">User List</div>
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
            {this.prodlistCard()}
            {this.prodlistCard()}
            {this.prodlistCard()}
            <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      </Container>
    );
  }
}

export default ProductListAdmin;
