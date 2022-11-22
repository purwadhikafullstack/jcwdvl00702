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
import { ReceiptLong, Search, SortTwoTone } from '@mui/icons-material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import '../assets/styles/MyOrder.css';

class MyOrder extends React.Component {
  state = {
    isOnGoing: true,
    isCompleted: false,
    value: '1',
    isOrderComplete: true,
    isOrderOg: false,
    status: '',
    isSearch: false,
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

  mocDetailStatus = (status) => {
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

  myOrderCard = (status) => {
    return (
      <div className="moc-main">
        <div className="moc-image">
          <img
            src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
            className="moc-product"
            alt="Product Image"
          />
        </div>
        <div className="moc-detail">
          <div className="moc-detail-name">Kocheng Kochengan Lucu Aja</div>
          <div className="moc-detail-subname">+ 12 other items</div>
          <div className="moc-detail-subname">Purchase date : 21-11-2022</div>
          {this.mocDetailStatus(status)}
          <div className="moc-detail-bottom">
            <div className="moc-detail-bottom-price">Rp. 7.250.000 ,-</div>
            <Button
              sx={{ borderRadius: '20px', backgroundColor: 'black', fontSize: '8px', fontFamily: 'Lora' }}
              variant="contained"
              className="moc-detail-bottom-track">
              Track order
            </Button>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="my-order-main">
          <div className="my-order-banner">
            <div className="my-order-banner-logo">
              <IconButton disabled>
                <ReceiptLong />
              </IconButton>
            </div>

            {this.state.isSearch ? (
              <>
                <ClickAwayListener onClickAway={this.isSearchHandleClose}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: 'Lora' }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'Search' }}
                    className="my-order-search"
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
                <div className="my-order-banner-text">My Orders</div>
                <div className="my-order-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}

            <div className="my-order-banner-menu">
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
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </div>

          <div className="my-order-tab">
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
                      {this.myOrderCard('1')}
                      {this.myOrderCard('2')}
                      {this.myOrderCard('3')}
                      {this.myOrderCard('4')}

                      <Stack spacing={1} sx={{ position: 'fixed', top: '80%', width: '110%', fontFamily: 'Lora' }}>
                        <Pagination count={10} />
                      </Stack>
                    </TabPanel>
                  </>
                ) : (
                  <TabPanel value="1">
                    <div className="my-order-og">
                      <img
                        src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                        className="my-order-og-logo"
                        alt="No Order"
                      />
                      <div className="my-order-og-text-1">You don't have an order yet</div>
                      <div className="my-order-og-text-2">You don't have On Going orders at this time</div>
                    </div>
                  </TabPanel>
                )}

                {this.state.isOrderComplete ? (
                  <>
                    <TabPanel value="2">
                      {this.myOrderCard('5')}
                      {this.myOrderCard('6')}

                      <Stack spacing={1} sx={{ position: 'fixed', top: '80%', width: '110%', fontFamily: 'Lora' }}>
                        <Pagination count={10} />
                      </Stack>
                    </TabPanel>
                  </>
                ) : (
                  <TabPanel value="2">
                    <div className="my-order-og">
                      <img
                        src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                        className="my-order-og-logo"
                        alt="No Order"
                      />
                      <div className="my-order-og-text-1">You don't have an order yet</div>
                      <div className="my-order-og-text-2">You don't have Completed orders at this time</div>
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

export default MyOrder;
