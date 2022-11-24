import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  Input,
  FormControl,
  IconButton,
  Container,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import {
  AccountBox,
  Logout,
  NotificationsOutlined,
  MoreHoriz,
  People,
  Warehouse,
  Ballot,
  Inventory,
  ContentPaste,
  ReceiptLong,
  ManageSearch,
  Work,
} from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/Dashboard.css';

class Dashboard extends React.Component {
  state = {
    role: 'Super-Admin',
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
                <Link to="/products-management" className="userlist-banner-menu-link">
                  Products Mng.
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

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="dashboard-main">
          <div className="dashboard-top">
            <div className="dashboard-top-avatar">
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="account-button" variant="contained" {...bindTrigger(popupState)}>
                      <IconButton>
                        <Avatar>
                          <AccountBox />
                        </Avatar>
                      </IconButton>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>
                        <AccountBox />
                        Profile
                      </MenuItem>
                      <MenuItem onClick={popupState.close}>
                        <Logout />
                        Sign Out
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
            <div className="dashboard-top-text">
              <div className="dashboard-top-text-1">{this.state.role}</div>
              <div className="dashboard-top-text-2">Dean Febrius</div>
            </div>
            <div className="dashboard-top-icon">
              <div className="dashboard-top-icon-1">
                <IconButton>
                  <NotificationsOutlined />
                </IconButton>
              </div>
              <div className="dashboard-top-icon-2"> {this.menuHandler()}</div>
            </div>
          </div>

          <div style={{ borderTop: '2px solid lightgray ', height: '10px' }}></div>

          <div className="dashboard-bottom">
            <div className="dashboard-bottom-text">Activities</div>
            <div
              classname="dashboard-bottom-icon"
              style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <Link to="/user-list">
                  <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                    <People />
                  </IconButton>
                </Link>
                <div className="d-b-icon-text">User List</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <Warehouse />
                </IconButton>
                <div className="d-b-icon-text">Warehouse Management</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <Ballot />
                </IconButton>
                <div className="d-b-icon-text">Products Management</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <Inventory />
                </IconButton>
                <div className="d-b-icon-text">Stock Mutation</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <ContentPaste />
                </IconButton>
                <div className="d-b-icon-text">Order List</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <ReceiptLong />
                </IconButton>
                <div className="d-b-icon-text">Sales Report</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <ManageSearch />
                </IconButton>
                <div className="d-b-icon-text">Stock History</div>
              </div>
              <div classname="d-b-icon" style={{ margin: '10px' }}>
                <IconButton className="d-b-icon-2" sx={{ backgroundColor: 'rgb(234, 234, 234)' }}>
                  <Work />
                </IconButton>
                <div className="d-b-icon-text">Assign Task</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Dashboard;