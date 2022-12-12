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
import { MoreHoriz, Search, SportsSoccerOutlined, ManageSearch, SortTwoTone } from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/StockHistory.css';

class StockHistory extends React.Component {
  state = {
    isSearch: false,
    isAdmin: true,
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
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  stockHistory = (product) => {
    return (
      <div className="shc-main">
        <div className="shc-image">
          <img
            src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
            className="shc-product"
            alt="Product Image"
          />
        </div>
        <div className="shc-detail">
          <div className="shc-detail-name">{product}</div>
          <div className="shc-detail-subname-3">Product ID: 701241</div>

          <div className="shc-detail-subname">
            <div className="shc-detail-subname-1">
              <SportsSoccerOutlined />
            </div>
            <div className="shc-detail-subname-2">Sports</div>
          </div>

          <div className="shc-detail-bottom">
            <Link to="/product-stock-history" className="pladmin-banner-menu-link">
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                className="shc-detail-bottom-detail">
                Detail
              </Button>
            </Link>
          </div>
        </div>
      </div>

      // ALTERNATE 1
      // <div className="shc-main">
      //   <div className="shc-subdetail">
      //     <div className="shc-detail-name">Product Name</div>
      //     <div className="shc-detail-subname">Product ID</div>
      //     <div className="shc-detail-subname">Periode</div>
      //     <div className="shc-detail-subname">Location</div>
      //     <div className="shc-detail-subname">Increment</div>
      //     <div className="shc-detail-subname">Reduction</div>
      //     <div className="shc-detail-subname">Final Stock</div>
      //   </div>
      //   <div className="shc-detail">
      //     <div className="shc-detail-name">{product}</div>
      //     <div className="shc-detail-subname">701241</div>
      //     <div className="shc-detail-subname">December 2022</div>
      //     <div className="shc-detail-subname">Warehouse A</div>
      //     <div className="shc-detail-subname">15</div>
      //     <div className="shc-detail-subname">3</div>
      //     <div className="shc-detail-subname">21</div>
      //   </div>
      //   <div className="shc-detail-bottom">
      //     <Link to="/products-management-detail" className="pladmin-banner-menu-link">
      //       <Button
      //         sx={{
      //           borderRadius: '20px',
      //           backgroundColor: 'rgb(153,255,153,0.9)',
      //           fontSize: '8px',
      //           fontFamily: 'Lora',
      //           color: 'black',
      //         }}
      //         variant="contained"
      //         className="shc-detail-bottom-detail">
      //         Detail
      //       </Button>
      //     </Link>
      //   </div>
      // </div>
    );
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="stockhistory-main">
          <div className="stockhistory-banner">
            <div className="stockhistory-banner-logo">
              <IconButton disabled>
                <ManageSearch />
              </IconButton>
            </div>
            {this.state.isSearch ? (
              <>
                <ClickAwayListener onClickAway={this.isSearchHandleClose}>
                  <InputBase
                    sx={{ ml: 1, flex: 1, fontFamily: 'Lora' }}
                    placeholder="Product Name / ID"
                    inputProps={{ 'aria-label': 'Search' }}
                    className="stockhistory-search"
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
                <div className="stockhistory-banner-text">Stock History</div>
                <div className="stockhistory-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}
            <div className="stockhistory-banner-add">
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
                        <img src="https://img.icons8.com/fluency-systems-filled/22/null/sort-numeric-up.png" />A - Z
                      </MenuItem>
                      <MenuItem onClick={popupState.close} sx={{ fontFamily: 'Lora' }}>
                        <img src="https://img.icons8.com/windows/24/null/sort-numeric-up-reversed.png" />Z - A
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
            <div className="stockhistory-banner-menu">{this.menuHandler()}</div>
          </div>
          <div className="stockhistory-content">
            {this.stockHistory('Barang A')}
            {this.stockHistory('Kocheng Kochengan Najkal Tapi Lucu Aja')}
            {this.stockHistory('Sepatu sueve')}
            <Stack spacing={1} sx={{ position: 'fixed', top: '78%', width: '110%', fontFamily: 'Lora' }}>
              <Pagination count={10} />
            </Stack>
          </div>
        </div>
      </Container>
    );
  }
}

export default StockHistory;
