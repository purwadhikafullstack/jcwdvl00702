import React from 'react';
import {
  IconButton,
  Box,
  Tab,
  Button,
  Container,
  Menu,
  MenuItem,
  InputBase,
  InputAdornment,
  ClickAwayListener,
  Pagination,
  Stack,
} from '@mui/material';
import { Search, SortTwoTone, MoreHoriz, ContentPaste } from '@mui/icons-material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/OrderList.css';

class OrderList extends React.Component {
  state = {
    isOnGoing: true,
    isCompleted: false,
    value: '1',
    isOrderComplete: true,
    isOrderOg: false,
    status: '',
    isSearch: false,
    isAdmin: true,
  };

  handleChange = (event, value) => {
    this.setState({ ...this.state, value });
  };

  isSearchHandle = () => {
    this.setState({ ...this.state, isSearch: true });
  };

  isSearchHandleClose = () => {
    this.setState({ ...this.state, isSearch: false });
  };

  olistcDetailStatus = (status) => {
    if (status === '1') {
      return (
        <Box className="moc-detail-status-1" sx={{ backgroundColor: 'rgb(255,165,0,0.4)' }}>
          Waiting for payment
        </Box>
      );
    } else if (status === '2') {
      return (
        <Box className="moc-detail-status-2" sx={{ backgroundColor: 'rgb(255,215,0,0.4)' }}>
          Payment confirmation
        </Box>
      );
    } else if (status === '3') {
      return (
        <Box className="moc-detail-status-3" sx={{ backgroundColor: 'rgb(152,251,152,0.4)' }}>
          In process
        </Box>
      );
    } else if (status === '4') {
      return (
        <Box className="moc-detail-status-4" sx={{ backgroundColor: 'rgba(127, 255, 212, 0.4)' }}>
          In delivery
        </Box>
      );
    } else if (status === '5') {
      return (
        <Box className="moc-detail-status-5" sx={{ backgroundColor: 'rgb(72,209,204,0.4)' }}>
          Received
        </Box>
      );
    } else {
      return (
        <Box className="moc-detail-status-6" sx={{ backgroundColor: 'rgb(220,20,60,0.4)' }}>
          Canceled
        </Box>
      );
    }
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
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  orderListCard = (status) => {
    return (
      <div className="olistc-main">
        <div className="olistc-subdetail">
          <div className="olistc-detail-name">Order ID</div>
          <div className="olistc-detail-subname">Order Date</div>
          <div className="olistc-detail-subname">User ID</div>
          <div className="olistc-detail-subname">User</div>
          <div className="olistc-detail-subname">From</div>
          {this.olistcDetailStatus(status)}
        </div>
        <div className="olistc-detail">
          <div className="olistc-detail-name">20220112235900</div>
          <div className="olistc-detail-subname">21-11-2022</div>
          <div className="olistc-detail-subname">19450817110256</div>
          <div className="olistc-detail-subname">Maria Marcelinus</div>
          <div className="olistc-detail-subname">Warehouse A</div>
          <div className="olistc-detail-bottom">
            <Link to="/order-detail-admin">
              <Button
                sx={{ borderRadius: '20px', backgroundColor: 'black', fontSize: '8px', fontFamily: 'Lora' }}
                variant="contained"
                className="olistc-detail-bottom-track">
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
        <div className="orderlist-main">
          <div className="orderlist-banner">
            <div className="orderlist-banner-logo">
              <IconButton disabled>
                <ContentPaste />
              </IconButton>
            </div>

            {this.state.isSearch ? (
              <>
                <ClickAwayListener onClickAway={this.isSearchHandleClose}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: 'Lora' }}
                    placeholder="Order ID"
                    inputProps={{ 'aria-label': 'Search' }}
                    className="orderlist-search"
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
                <div className="orderlist-banner-text">Order List</div>
                <div className="orderlist-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}

            <div className="orderlist-banner-sort">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="account-button" variant="contained" {...bindTrigger(popupState)}>
                      <IconButton>
                        <SortTwoTone />
                      </IconButton>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close} sx={{ fontFamily: 'Lora' }}>
                        <img src="https://img.icons8.com/fluency-systems-filled/22/null/sort-numeric-up.png" />
                        Oldest
                      </MenuItem>
                      <MenuItem onClick={popupState.close} sx={{ fontFamily: 'Lora' }}>
                        <img src="https://img.icons8.com/windows/24/null/sort-numeric-up-reversed.png" />
                        Recent
                      </MenuItem>
                      {this.state.isAdmin ? (
                        <>
                          <MenuItem>
                            <img src="https://img.icons8.com/ios/24/null/garage-closed.png" />
                            Warehouse A
                          </MenuItem>
                          <MenuItem>
                            <img src="https://img.icons8.com/ios/24/null/garage-closed.png" />
                            Warehouse B
                          </MenuItem>
                          <MenuItem>
                            <img src="https://img.icons8.com/ios/24/null/garage-closed.png" />
                            Warehouse C
                          </MenuItem>
                        </>
                      ) : null}
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>

            <div className="orderlist-banner-menu">{this.menuHandler()}</div>
          </div>

          <div className="orderlist-tab">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={this.state.value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                    <Tab sx={{ marginLeft: '20px', fontFamily: 'Lora' }} label="On Going" value="1" />
                    <Tab sx={{ marginLeft: '100px', fontFamily: 'Lora' }} label="Completed" value="2" />
                  </TabList>
                </Box>

                {this.state.isOrderOg ? (
                  <>
                    <TabPanel value="1">
                      {this.orderListCard('1')}
                      {this.orderListCard('2')}
                      {this.orderListCard('3')}
                      {this.orderListCard('4')}

                      <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
                        <Pagination count={10} />
                      </Stack>
                    </TabPanel>
                  </>
                ) : (
                  <TabPanel value="1">
                    <div className="orderlist-og">
                      <img
                        src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                        className="orderlist-og-logo"
                        alt="No Order"
                      />
                      <div className="orderlist-og-text-1">You don't have an order yet</div>
                      <div className="orderlist-og-text-2">You don't have On Going orders at this time</div>
                    </div>
                  </TabPanel>
                )}

                {this.state.isOrderComplete ? (
                  <>
                    <TabPanel value="2">
                      {this.orderListCard('5')}
                      {this.orderListCard('6')}

                      <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
                        <Pagination count={10} />
                      </Stack>
                    </TabPanel>
                  </>
                ) : (
                  <TabPanel value="2">
                    <div className="orderlist-og">
                      <img
                        src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                        className="orderlist-og-logo"
                        alt="No Order"
                      />
                      <div className="orderlist-og-text-1">You don't have an order yet</div>
                      <div className="orderlist-og-text-2">You don't have Completed orders at this time</div>
                    </div>
                  </TabPanel>
                )}
              </TabContext>
            </Box>
          </div>
        </div>
      </Container>
    );
  }
}

export default OrderList;
