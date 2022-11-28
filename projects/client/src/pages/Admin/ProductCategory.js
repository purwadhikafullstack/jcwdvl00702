import React from 'react';
import { IconButton, InputBase, Container, Menu, MenuItem, Button, Select, Modal, Box } from '@mui/material';
import {
  MoreHoriz,
  Sell,
  SportsSoccerOutlined,
  BusinessCenterOutlined,
  DirectionsBikeOutlined,
  HikingOutlined,
  HandymanOutlined,
  MonitorHeartOutlined,
  FitnessCenterOutlined,
} from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/ProductCategory.css';

class ProductCategory extends React.Component {
  state = {
    setIcon: 0,
    setAdd: false,
    editedIndex: '',
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  isEditHandle = (index) => {
    this.setState({ ...this.state, editedIndex: index });
  };

  isEditHandleClose = () => {
    this.setState({ ...this.state, editedIndex: '' });
  };

  handleIconChange = (event) => {
    this.setState({ ...this.state, setIcon: event.target.value });
  };

  addOpen = () => {
    this.setState({ ...this.state, setAdd: true });
  };

  addClose = () => {
    this.setState({ ...this.state, setAdd: false });
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
                <Link to="/dashboard" className="apc-banner-menu-link">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/user-list" className="apc-banner-menu-link">
                  User List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/warehouse-management" className="apc-banner-menu-link">
                  Warehouse Mng.
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-list" className="apc-banner-menu-link">
                  Product List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-category" className="apc-banner-menu-link">
                  Product Category
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-mutation" className="apc-banner-menu-link">
                  Stock Mutation
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/order-list" className="apc-banner-menu-link">
                  Order List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sales-report" className="apc-banner-menu-link">
                  Sales Report
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-history" className="apc-banner-menu-link">
                  Stock History
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/assign-task" className="apc-banner-menu-link">
                  Assign Task
                </Link>
              </MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    );
  };

  categoryCard = (icon, text, index) => {
    return (
      <div className="apc-card">
        {this.state.editedIndex === index ? (
          <>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.setIcon}
              className="apc-card-icon-select"
              onChange={this.handleIconChange}>
              <MenuItem value={0}>
                <em>{icon}</em>
              </MenuItem>
              <MenuItem value={1}>
                <SportsSoccerOutlined />
              </MenuItem>
              <MenuItem value={2}>
                <BusinessCenterOutlined />
              </MenuItem>
              <MenuItem value={3}>
                <DirectionsBikeOutlined />
              </MenuItem>
              <MenuItem value={4}>
                <HikingOutlined />
              </MenuItem>
              <MenuItem value={5}>
                <HandymanOutlined />
              </MenuItem>
              <MenuItem value={6}>
                <MonitorHeartOutlined />
              </MenuItem>
              <MenuItem value={7}>
                <FitnessCenterOutlined />
              </MenuItem>
            </Select>
            <InputBase
              sx={{ ml: 1, width: '200px', border: '1px solid grey' }}
              placeholder={text}
              inputProps={{ 'aria-label': 'Search' }}
              className="apc-card-input"
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
              onClick={this.isEditHandleClose}>
              Save
            </Button>
          </>
        ) : (
          <>
            {icon}
            <div className="apc-card-text">{text}</div>
            <Button
              sx={{
                borderRadius: '20px',
                backgroundColor: 'rgb(255,153,153,0.9)',
                fontSize: '8px',
                fontFamily: 'Lora',
                color: 'black',
              }}
              variant="contained"
              className="apc-card-delete">
              Delete
            </Button>
            <Button
              sx={{
                borderRadius: '20px',
                backgroundColor: 'rgb(255,204,153,0.9)',
                fontSize: '8px',
                fontFamily: 'Lora',
                color: 'black',
                marginLeft: '5px',
              }}
              variant="contained"
              className="apc-card-edit"
              onClick={() => this.isEditHandle(index)}>
              Edit
            </Button>
          </>
        )}
      </div>
    );
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="apc-main">
          <div className="apc-banner">
            <IconButton disabled>
              <Sell />
            </IconButton>
            <div className="apc-banner-text">Product Category</div>
            <div className="apc-banner-menu">{this.menuHandler()}</div>
          </div>
          <div className="apc-content">
            {this.categoryCard(<SportsSoccerOutlined />, 'Sports', 0)}
            {this.categoryCard(<BusinessCenterOutlined />, 'Bags', 1)}
            {this.categoryCard(<DirectionsBikeOutlined />, 'Bikes', 2)}
            {this.categoryCard(<HikingOutlined />, 'Sportswear', 3)}
            {this.categoryCard(<HandymanOutlined />, 'Accessories', 4)}
          </div>

          <button className="apc-add" onClick={this.addOpen}>
            Add New Category
          </button>
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
              }}>
              <Select
                sx={{ width: '80px' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={this.state.setIcon}
                className="apc-card-icon-select"
                onChange={this.handleIconChange}>
                <MenuItem value={0}>
                  <em>Icon</em>
                </MenuItem>
                <MenuItem value={1}>
                  <SportsSoccerOutlined />
                </MenuItem>
                <MenuItem value={2}>
                  <BusinessCenterOutlined />
                </MenuItem>
                <MenuItem value={3}>
                  <DirectionsBikeOutlined />
                </MenuItem>
                <MenuItem value={4}>
                  <HikingOutlined />
                </MenuItem>
                <MenuItem value={5}>
                  <HandymanOutlined />
                </MenuItem>
                <MenuItem value={6}>
                  <MonitorHeartOutlined />
                </MenuItem>
                <MenuItem value={7}>
                  <FitnessCenterOutlined />
                </MenuItem>
              </Select>

              <InputBase
                sx={{ ml: 1, border: '1px solid grey', backgroundColor: 'white', width: '220px' }}
                placeholder="Category Name"
                inputProps={{ 'aria-label': 'Search' }}
                className="apc-card-input"
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
                onClick={this.addClose}>
                Add
              </Button>
            </Box>
          </Modal>
        </div>
      </Container>
    );
  }
}

export default ProductCategory;
