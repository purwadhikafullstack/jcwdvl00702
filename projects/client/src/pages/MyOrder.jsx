import React from 'react';
import { IconButton, Box, Tab, Tabs } from '@mui/material';
import { PendingOutlined, ReceiptLong, Search } from '@mui/icons-material';
import { TabPanel, TabList, TabContext } from '@mui/lab';

import '../assets/styles/MyOrder.css';

class MyOrder extends React.Component {
  state = {
    isOnGoing: true,
    isCompleted: false,
    value: '1',
  };

  handleChange = (event, value) => {
    this.setState({ ...this.state, value });
  };

  render() {
    return (
      <div className="my-order-main">
        <div className="my-order-banner">
          <div className="my-order-banner-logo">
            <IconButton>
              <ReceiptLong />
            </IconButton>
          </div>
          <div className="my-order-banner-text">My Orders</div>
          <div className="my-order-banner-search">
            <IconButton>
              <Search />
            </IconButton>
          </div>
          <div className="my-order-banner-menu">
            <IconButton>
              <PendingOutlined />
            </IconButton>
          </div>
        </div>

        <div className="my-order-tab">
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={this.state.value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList
                  onChange={this.handleChange}
                  // onClick={() => this.setState({ value: value })}
                  aria-label="lab API tabs example">
                  <Tab label="On Going" value="1" />
                  <Tab label="Completed" value="2" />
                </TabList>
              </Box>
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
              <TabPanel value="2">
                <div className="my-order-og">
                  <img
                    src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
                    className="my-order-og-logo"
                    alt="No Order"
                  />
                  <div className="my-order-og-text-1">You don't have an order yet</div>
                  <div className="my-order-og-text-2">You don't have Completed orders at this time</div>
                </div>{' '}
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    );
  }
}

export default MyOrder;
