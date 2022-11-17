import React from 'react';
import { IconButton, Box, Tab, Tabs, Button, Container } from '@mui/material';
import { PendingOutlined, ReceiptLong, Search } from '@mui/icons-material';
import { TabPanel, TabList, TabContext } from '@mui/lab';

import '../assets/styles/MyOrder.css';

class MyOrder extends React.Component {
  state = {
    isOnGoing: true,
    isCompleted: false,
    value: '1',
    orderCompleted: true,
  };

  handleChange = (event, value) => {
    this.setState({ ...this.state, value });
  };

  myOrderCard = () => {
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
          <div className="moc-detail-subname">Si Belang | Cat | Male</div>
          <Button className="moc-detail-status" sx={{ fontSize: '8px' }} variant="contained" disabled>
            In delivery
          </Button>
          <div className="moc-detail-bottom">
            <div className="moc-detail-bottom-price">Rp. 7.250.000 ,-</div>
            <Button
              sx={{ borderRadius: '20px', backgroundColor: 'black', fontSize: '8px' }}
              variant="contained"
              className="moc-detail-bottom-track">
              Track Order
            </Button>
          </div>
        </div>
      </div>
    );
  };

=======
>>>>>>> 29d329a6 (Feature MWA-45)
  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
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
                  <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                    <Tab sx={{ marginLeft: '20px' }} label="On Going" value="1" />
                    <Tab sx={{ marginLeft: '70px' }} label="Completed" value="2" />
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

                {this.state.orderCompleted ? (
                  <TabPanel value="2">
                    {this.myOrderCard()}
                    {this.myOrderCard()}
                    {this.myOrderCard()}
                    {this.myOrderCard()}
                  </TabPanel>
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
