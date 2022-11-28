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
import { MoreHoriz, People, Search, PersonAdd } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/UserList.css';

class UserList extends React.Component {
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
                <Link to="/dashboard" className="userlist-banner-menu-link">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/user-list" className="userlist-banner-menu-link">
                  User List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/warehouse-management" className="userlist-banner-menu-link">
                  Warehouse Mng.
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-list" className="userlist-banner-menu-link">
                  Product List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-category" className="userlist-banner-menu-link">
                  Product Category
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-mutation" className="userlist-banner-menu-link">
                  Stock Mutation
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/order-list" className="userlist-banner-menu-link">
                  Order List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sales-report" className="userlist-banner-menu-link">
                  Sales Report
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-history" className="userlist-banner-menu-link">
                  Stock History
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/assign-task" className="userlist-banner-menu-link">
                  Assign Task
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  userlistCard = () => {
    return (
      <div className="ulc-main">
        <div className="ulc-image">
          <img
            src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
            className="ulc-product"
            alt="Product Image"
          />
        </div>
        <div className="ulc-detail">
          <div className="ulc-detail-name">Maria Marcelinus</div>
          <div className="ulc-detail-subname">ID User: 19450817110256</div>
          <div className="ulc-detail-subname">Area 1 - DKI Jakarta</div>
          <div className="ulc-detail-subname">Member since: 17-08-1945</div>
          <div className="ulc-detail-bottom">
            <Button
              sx={{
                borderRadius: '20px',
                backgroundColor: 'rgb(255,153,153,0.9)',
                fontSize: '8px',
                fontFamily: 'Lora',
                color: 'black',
              }}
              variant="contained"
              className="ulc-detail-bottom-delete">
              Delete
            </Button>
            <Link to="/detail-user" className="userlist-banner-menu-link">
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                className="ulc-detail-bottom-detail">
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
        <div className="userlist-main">
          <div className="userlist-banner">
            <div className="userlist-banner-logo">
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
                    className="userlist-search"
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
                <div className="userlist-banner-text">User List</div>
                <div className="userlist-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}
            <div className="userlist-banner-add">
              <Link to="/add-user">
                <IconButton>
                  <PersonAdd />
                </IconButton>
              </Link>
            </div>
            <div className="userlist-banner-menu">{this.menuHandler()}</div>
          </div>
          <div className="userlist-content">
            {this.userlistCard()}
            {this.userlistCard()}
            {this.userlistCard()}
            <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      </Container>
    );
  }
}

export default UserList;
