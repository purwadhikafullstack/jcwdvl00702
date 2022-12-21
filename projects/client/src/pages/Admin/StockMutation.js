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
  Modal,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import { MoreHoriz, NoteAdd, Search, SortTwoTone, Inventory } from '@mui/icons-material';
import { TabPanel, TabList, TabContext } from '@mui/lab';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/StockMutation.css';

class StockMutation extends React.Component {
  state = {
    value: '1',
    status: '',
    isSearch: false,
    isAdmin: true,
    setAdd: false,
    askFrom: 0,
    askTo: 0,
    productValue: 0,
    quantityValue: 0,
    setOpenA: false,
    setOpenR: false,
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({ ...this.state, [name]: value });
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

  addOpen = () => {
    this.setState({ ...this.state, setAdd: true });
  };

  addClose = () => {
    this.setState({ ...this.state, setAdd: false });
  };

  askMutation = (from, to, product, quantity) => {
    console.log('result', from, to, product, quantity);
    this.setState({ ...this.state, setAdd: false });
  };

  handleAskFromChange = (event) => {
    this.setState({ ...this.state, askFrom: event.target.value });
  };

  handleAskToChange = (event) => {
    this.setState({ ...this.state, askTo: event.target.value });
  };

  handleClickOpenAccept = () => {
    this.setState({ ...this.state, setOpenA: true });
  };

  handleCloseAccept = () => {
    this.setState({ ...this.state, setOpenA: false });
  };

  handleClickOpenReject = () => {
    this.setState({ ...this.state, setOpenR: true });
  };

  handleCloseReject = () => {
    this.setState({ ...this.state, setOpenR: false });
  };

  mutationDetailStatus = (status) => {
    if (status === '1') {
      return (
        <Box className="mutation-detail-status-1" sx={{ backgroundColor: 'rgb(255,165,0,0.4)' }}>
          Waiting
        </Box>
      );
    } else if (status === '2') {
      return (
        <Box className="mutation-detail-status-2" sx={{ backgroundColor: 'rgb(72,209,204,0.4)' }}>
          Done
        </Box>
      );
    } else {
      return (
        <Box className="mutation-detail-status-6" sx={{ backgroundColor: 'rgb(220,20,60,0.4)' }}>
          Canceled
        </Box>
      );
    }
  };

  mutationCard = (status) => {
    return (
      <div className="mutation-main">
        <div className="mutation-image">
          <img
            src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
            className="mutation-product"
            alt="Product Image"
          />
        </div>
        <div className="mutation-detail">
          <div className="mutation-detail-name">Kocheng Kochengan Lucu Aja</div>
          <div className="mutation-detail-subname">Product ID: 701241</div>
          <div className="mutation-detail-subname">From: WH001</div>
          <div className="mutation-detail-subname">Qty: 2 pcs</div>
          <div className="mutation-detail-subname">To: WH003</div>
          {this.mutationDetailStatus(status)}

          {this.state.value === '1' ? null : (
            <>
              <div className="mutation-detail-bottom">
                <div>
                  <Button
                    sx={{
                      borderRadius: '20px',
                      backgroundColor: 'rgba(127, 255, 212, 0.4)',
                      fontSize: '8px',
                      fontFamily: 'Lora',
                      color: 'black',
                    }}
                    onClick={this.handleClickOpenAccept}
                    variant="contained"
                    className="mutation-detail-bottom-track">
                    Accept
                  </Button>
                  <Dialog
                    open={this.state.setOpenA}
                    onClose={this.handleCloseAccept}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{'Accept mutation request'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">Are you sure ?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCloseAccept}>No</Button>
                      <Button onClick={this.handleCloseAccept} autoFocus>
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div>
                  <Button
                    sx={{
                      borderRadius: '20px',
                      backgroundColor: 'rgb(220,20,60,0.4)',
                      fontSize: '8px',
                      fontFamily: 'Lora',
                      color: 'black',
                    }}
                    onClick={this.handleClickOpenReject}
                    variant="contained"
                    className="mutation-detail-bottom-track">
                    Reject
                  </Button>
                  <Dialog
                    open={this.state.setOpenR}
                    onClose={this.handleCloseReject}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{'Reject mutation request'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">Are you sure ?</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleCloseReject}>No</Button>
                      <Button onClick={this.handleCloseReject} autoFocus>
                        Yes
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
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

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="stockmutation-main">
          <div className="stockmutation-banner">
            <div className="stockmutation-banner-logo">
              <IconButton disabled>
                <Inventory />
              </IconButton>
            </div>
            {this.state.isSearch ? (
              <>
                <ClickAwayListener onClickAway={this.isSearchHandleClose}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: 'Lora' }}
                    placeholder="Product ID"
                    inputProps={{ 'aria-label': 'Search' }}
                    className="stockmutation-search"
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
                <div className="stockmutation-banner-text">Stock Mutation</div>
                <div className="stockmutation-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}
            <div className="stockmutation-banner-menu">
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

            <div className="stockmutation-banner-add">
              <IconButton onClick={this.addOpen}>
                <NoteAdd />
              </IconButton>
              <Modal
                open={this.state.setAdd}
                onClose={this.addClose}
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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <Select
                    sx={{ width: '200px', marginBottom: '5px' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.askFrom}
                    className="apc-card-icon-select"
                    onChange={this.handleAskFromChange}>
                    <MenuItem value={0}>
                      <em>From</em>
                    </MenuItem>
                    <MenuItem value={1}>Warehouse 1</MenuItem>
                    <MenuItem value={2}>Warehouse 2</MenuItem>
                    <MenuItem value={3}>Warehouse 3</MenuItem>
                  </Select>
                  <Select
                    sx={{ width: '200px' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.askTo}
                    className="apc-card-icon-select"
                    onChange={this.handleAskToChange}>
                    <MenuItem value={0}>
                      <em>To</em>
                    </MenuItem>
                    <MenuItem value={1}>Warehouse 1</MenuItem>
                    <MenuItem value={2}>Warehouse 2</MenuItem>
                    <MenuItem value={3}>Warehouse 3</MenuItem>
                  </Select>
                  <InputBase
                    sx={{
                      border: '1px solid grey',
                      backgroundColor: 'white',
                      width: '200px',
                      paddingLeft: '10px',
                    }}
                    placeholder="Product ID"
                    name="productValue"
                    // value={this.state.productValue}
                    inputProps={{ 'aria-label': 'Search' }}
                    className="apc-card-input"
                    onChange={this.inputHandler}

                    // onChange={(e) => {
                    //   this.setState({ ...this.state, productValue: e.target.value });
                    // }}
                  />
                  <InputBase
                    sx={{
                      border: '1px solid grey',
                      backgroundColor: 'white',
                      width: '200px',
                      paddingLeft: '10px',
                    }}
                    placeholder="Amount"
                    name="quantityValue"
                    // value={this.state.quantityValue}
                    inputProps={{ 'aria-label': 'Search' }}
                    className="apc-card-input"
                    onChange={this.inputHandler}

                    // onChange={(e) => {
                    //   this.setState({ ...this.state, quantityValue: e.target.value });
                    // }}
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
                    onClick={() => {
                      this.askMutation(
                        this.state.askFrom,
                        this.state.askTo,
                        this.state.productValue,
                        this.state.quantityValue
                      );
                    }}>
                    Ask
                  </Button>
                </Box>
              </Modal>
            </div>
            <div className="stockmutation-banner-menu">{this.menuHandler()}</div>
          </div>

          <div className="stockmutation-tab">
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={this.state.value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={this.handleChange} aria-label="lab API tabs example">
                    <Tab sx={{ marginLeft: '0px', fontFamily: 'Lora' }} label="Sales (Auto)" value="1" />
                    <Tab sx={{ marginLeft: '120px', fontFamily: 'Lora' }} label="WH (Manual)" value="2" />
                  </TabList>
                </Box>

                <TabPanel value="1">
                  {this.mutationCard('1')}
                  {this.mutationCard('2')}

                  <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
                    <Pagination count={10} />
                  </Stack>
                </TabPanel>

                <TabPanel value="2">
                  {this.mutationCard('2')}
                  {this.mutationCard('1')}

                  <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
                    <Pagination count={10} />
                  </Stack>
                </TabPanel>
              </TabContext>
            </Box>
          </div>
        </div>
      </Container>
    );
  }
}

export default StockMutation;
