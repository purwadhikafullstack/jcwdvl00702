import React from 'react';
import { Button, IconButton, Container, Select, MenuItem, InputBase } from '@mui/material';
import {
  ArrowBack,
  Person,
  Email,
  Edit,
  ArrowForwardIos,
  Badge,
  Schedule,
  VerifiedUser,
  Lock,
  PhotoCamera,
  Work,
  Warehouse,
  Map,
  LocationOn,
} from '@mui/icons-material';
import GoogleMaps from '../../components/GoogleMaps';

import { Link } from 'react-router-dom';

import '../../assets/styles/DetailWarehouse.css';

class DetailWarehouse extends React.Component {
  state = {
    isEdit: false,
    isSuperAdmin: true,
    statusValue: 0,
  };

  editHandler = () => {
    this.setState({ ...this.state, isEdit: true });
  };

  saveHandler = () => {
    this.setState({ ...this.state, isEdit: false });
  };

  handleStatusChange = (event) => {
    this.setState({ ...this.state, statusValue: event.target.value });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="detailwh-main">
          <div className="detailwh-banner">
            <IconButton onClick={this.goBack}>
              <ArrowBack />
            </IconButton>
            <div className="detailwh-banner-text">Warehouse Detail</div>

            {this.state.isEdit ? (
              <>
                <Button
                  disabled
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: 'rgb(255,153,153,0.9)',
                    fontSize: '8px',
                    fontFamily: 'Lora',
                    color: 'black',
                    marginRight: '5px',
                  }}
                  variant="contained"
                  className="detailwh-banner-delete">
                  Delete
                </Button>
                <Button
                  sx={{
                    borderRadius: '20px',
                    backgroundColor: 'rgb(153,255,255,0.9)',
                    fontSize: '8px',
                    fontFamily: 'Lora',
                    color: 'black',
                  }}
                  variant="contained"
                  onClick={this.saveHandler}
                  className="detailwh-banner-edit">
                  Save
                </Button>
              </>
            ) : (
              <>
                {this.state.isSuperAdmin ? (
                  <>
                    <Button
                      sx={{
                        borderRadius: '20px',
                        backgroundColor: 'rgb(255,153,153,0.9)',
                        fontSize: '8px',
                        fontFamily: 'Lora',
                        color: 'black',
                        marginRight: '5px',
                      }}
                      variant="contained"
                      className="detailwh-banner-delete">
                      Delete
                    </Button>
                    <Button
                      sx={{
                        borderRadius: '20px',
                        backgroundColor: 'rgb(255,204,153,0.9)',
                        fontSize: '8px',
                        fontFamily: 'Lora',
                        color: 'black',
                      }}
                      variant="contained"
                      onClick={this.editHandler}
                      className="detailwh-banner-edit">
                      Edit
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      sx={{
                        borderRadius: '20px',
                        backgroundColor: 'rgb(255,153,153,0.9)',
                        fontSize: '8px',
                        fontFamily: 'Lora',
                        color: 'black',
                        marginRight: '5px',
                      }}
                      disabled
                      variant="contained"
                      className="detailwh-banner-delete">
                      Delete
                    </Button>
                    <Button
                      sx={{
                        borderRadius: '20px',
                        backgroundColor: 'rgb(255,204,153,0.9)',
                        fontSize: '8px',
                        fontFamily: 'Lora',
                        color: 'black',
                      }}
                      disabled
                      variant="contained"
                      onClick={this.editHandler}
                      className="detailwh-banner-edit">
                      Edit
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
          <div className="detailwh-content">
            {this.state.isEdit ? (
              <>
                <div className="detailwh-avatar">
                  <Button
                    variant="contained"
                    component="label"
                    sx={{ marginLeft: '2px', marginTop: '0px ', width: '300px' }}>
                    Upload
                    <input hidden accept="image/*" multiple type="file" />
                  </Button>
                  <img
                    className="detailwh-avatar-photo"
                    src="https://i.pinimg.com/736x/74/28/e6/7428e6b80ecd09bb6590d7ae175d5400.jpg"
                    alt=""
                  />
                </div>
                <div className="detailwh-map">
                  <GoogleMaps />
                </div>
              </>
            ) : (
              <>
                <div className="detailwh-avatar">
                  <img
                    className="detailwh-avatar-photo"
                    src="https://i.pinimg.com/736x/74/28/e6/7428e6b80ecd09bb6590d7ae175d5400.jpg"
                    alt=""
                  />
                </div>
                <div className="detailwh-map">
                  <GoogleMaps />
                </div>
              </>
            )}
            <div className="detailwh-content-detail">
              <ul className="dw-c-d-data">
                <li className="dw-c-d-item">
                  <Badge className="profileIcon" />
                  <span className="dw-c-d-item-1">ID</span>
                  <span className="dw-c-d-item-2">WH001</span>
                </li>

                {this.state.isEdit ? (
                  <>
                    <li className="dw-c-d-item">
                      <Warehouse className="profileIcon" />
                      <span className="dw-c-d-item-1">Name</span>
                      <InputBase
                        sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                        placeholder="WH Tomang 45"
                        className="dw-c-d-item-2-input"
                      />
                    </li>
                    <li className="dw-c-d-item">
                      <Email className="profileIcon" />
                      <span className="dw-c-d-item-1">Email</span>
                      <InputBase
                        sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                        placeholder="wh001_tomang@commerce.com"
                        className="dw-c-d-item-2-input"
                      />
                    </li>
                  </>
                ) : (
                  <>
                    <li className="dw-c-d-item">
                      <Warehouse className="profileIcon" />
                      <span className="dw-c-d-item-1">Name</span>
                      <span className="dw-c-d-item-2">WH Tomang 45</span>
                    </li>
                    <li className="dw-c-d-item">
                      <Email className="profileIcon" />
                      <span className="dw-c-d-item-1">Email</span>
                      <span className="dw-c-d-item-2">wh001_tomang@commerce.com</span>
                    </li>
                  </>
                )}

                <li className="dw-c-d-item">
                  <Work className="profileIcon" />
                  <span className="dw-c-d-item-1">Admin</span>
                  <span className="dw-c-d-item-2">Maria Marcelinus</span>
                </li>

                {this.state.isEdit ? (
                  <>
                    <VerifiedUser className="profileIcon" />
                    <span className="dw-c-d-item-1">Status</span>
                    <Select
                      sx={{ fontSize: '10px', width: '150px' }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.statusValue}
                      className="dw-c-d-item-2-select"
                      onChange={this.handleStatusChange}>
                      <MenuItem value={0}>
                        <em>Status</em>
                      </MenuItem>
                      <MenuItem value={1}>Active</MenuItem>
                      <MenuItem value={2}>Non-Active</MenuItem>
                    </Select>
                  </>
                ) : (
                  <>
                    <li className="dw-c-d-item">
                      <VerifiedUser className="profileIcon" />
                      <span className="dw-c-d-item-1">Status</span>
                      <span className="dw-c-d-item-2">Active</span>
                    </li>
                  </>
                )}

                <li className="dw-c-d-item">
                  <Map className="profileIcon" />
                  <span className="dw-c-d-item-1">Area (Province)</span>
                  <span className="dw-c-d-item-2">1 - DKI Jakarta</span>
                </li>
                <li className="dw-c-d-item">
                  <LocationOn className="profileIcon" />
                  <span className="dw-c-d-item-1">City</span>
                  <span className="dw-c-d-item-2">West Jakarta</span>
                </li>
                <li className="dw-c-d-item">
                  <LocationOn className="profileIcon" sx={{ color: 'white' }} />
                  <span className="dw-c-d-item-1">District</span>
                  <span className="dw-c-d-item-2">Palmerah</span>
                </li>
                <li className="dw-c-d-item">
                  <LocationOn className="profileIcon" sx={{ color: 'white' }} />
                  <span className="dw-c-d-item-1">Sub-District</span>
                  <span className="dw-c-d-item-2">Jatipulo</span>
                </li>
                <li className="dw-c-d-item">
                  <LocationOn className="profileIcon" sx={{ color: 'white' }} />
                  <span className="dw-c-d-item-1">Address</span>
                  <span className="dw-c-d-item-2">Tomang Raya No.45 RT.12/RW.5</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DetailWarehouse;
