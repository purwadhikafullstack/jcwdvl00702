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
import {
  MoreHoriz,
  People,
  Search,
  SportsSoccerOutlined,
  AddBox,
  ManageSearch,
  SortTwoTone,
} from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/StockHistory.css';

class StockHistory extends React.Component {
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
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  stockHistory = (product, mutation) => {
    return (
      <div className="shc-main">
        <div className="shc-subdetail">
          <div className="shc-detail-name">Product Name</div>
          <div className="shc-detail-subname">Product ID</div>
          <div className="shc-detail-subname">Periode</div>
          <div className="shc-detail-subname">Increment</div>
          <div className="shc-detail-subname">Reduction</div>
          <div className="shc-detail-subname">Final Stock</div>
        </div>
        <div className="shc-detail">
          <div className="shc-detail-name">{product}</div>
          <div className="shc-detail-subname">701241</div>
          <div className="shc-detail-subname">December 2022</div>
          <div className="shc-detail-subname">15</div>
          <div className="shc-detail-subname">3</div>
          <div className="shc-detail-subname">21</div>
        </div>
        <div className="shc-detail-bottom">
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
              className="shc-detail-bottom-detail">
              Detail
            </Button>
          </Link>
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
                <ManageSearch />
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
                <div className="pladmin-banner-text">Stock History</div>
                <div className="pladmin-banner-search">
                  <IconButton onClick={this.isSearchHandle}>
                    <Search />
                  </IconButton>
                </div>
              </>
            )}
            <div className="pladmin-banner-add">
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
            <div className="pladmin-banner-menu">{this.menuHandler()}</div>
          </div>
          <div className="pladmin-content">
            {this.stockHistory('Barang A', '+ 2')}
            {this.stockHistory('kocheng kocheng najkal', ' - 1')}
            {this.stockHistory('Sepatu sueve', ' - 3')}
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
