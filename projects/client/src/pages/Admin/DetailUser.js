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
} from '@mui/icons-material';

import { Link } from 'react-router-dom';

import '../../assets/styles/DetailUser.css';

class DetailUser extends React.Component {
  state = {
    isEdit: false,
    securityValue: 0,
  };

  editHandler = () => {
    this.setState({ ...this.state, isEdit: true });
  };

  saveHandler = () => {
    this.setState({ ...this.state, isEdit: false });
  };

  handleSecurityChange = (event) => {
    this.setState({ ...this.state, securityValue: event.target.value });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="detailuser-main">
          <div className="detailuser-banner">
            <IconButton onClick={this.goBack}>
              <ArrowBack />
            </IconButton>
            <div className="detailuser-banner-text">User Detail</div>

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
                  className="detailuser-banner-delete">
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
                  className="detailuser-banner-edit">
                  Save
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
                  variant="contained"
                  className="detailuser-banner-delete">
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
                  className="detailuser-banner-edit">
                  Edit
                </Button>
              </>
            )}
          </div>
          <div className="detailuser-content">
            {this.state.isEdit ? (
              <>
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="label"
                  sx={{ marginLeft: '250px', width: '40px', marginBottom: '-30px' }}>
                  <input hidden accept="image/*" type="file" />
                  <PhotoCamera />
                </IconButton>
                <div className="detailuser-content-avatar-edit">
                  <img
                    className="profileUserImg"
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </div>
              </>
            ) : (
              <>
                <div className="detailuser-content-avatar">
                  <img
                    className="profileUserImg"
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                  />
                </div>
              </>
            )}
            <div className="detailuser-content-detail">
              <ul className="du-c-d-data">
                <li className="du-c-d-item">
                  <Badge className="profileIcon" />
                  <span className="du-c-d-item-1">ID User</span>
                  <span className="du-c-d-item-2">19450817110256</span>
                </li>

                {this.state.isEdit ? (
                  <>
                    <li className="du-c-d-item">
                      <Person className="profileIcon" />
                      <span className="du-c-d-item-1">Fullname</span>
                      <InputBase
                        sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                        placeholder="Maria Marcelinus"
                        className="du-c-d-item-2-input"
                      />
                    </li>
                    <li className="du-c-d-item">
                      <Email className="profileIcon" />
                      <span className="du-c-d-item-1">Email</span>
                      <InputBase
                        sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                        placeholder="maria.marcelinus@mail.com"
                        className="du-c-d-item-2-input"
                      />
                    </li>
                  </>
                ) : (
                  <>
                    <li className="du-c-d-item">
                      <Person className="profileIcon" />
                      <span className="du-c-d-item-1">Fullname</span>
                      <span className="du-c-d-item-2">Maria Marcelinus</span>
                    </li>
                    <li className="du-c-d-item">
                      <Email className="profileIcon" />
                      <span className="du-c-d-item-1">Email</span>
                      <span className="du-c-d-item-2">maria.marcelinus@mail.com</span>
                    </li>
                  </>
                )}

                <li className="du-c-d-item">
                  <Schedule className="profileIcon" />
                  <span className="du-c-d-item-1">Member since</span>
                  <span className="du-c-d-item-2">17-08-1945</span>
                </li>
                <li className="du-c-d-item">
                  <VerifiedUser className="profileIcon" />
                  <span className="du-c-d-item-1">Status</span>
                  <span className="du-c-d-item-2">Unverified</span>
                </li>
                <li className="du-c-d-item">
                  {this.state.isEdit ? (
                    <>
                      <Lock className="profileIcon" />
                      <span className="du-c-d-item-1">Security</span>
                      <Select
                        sx={{ fontSize: '10px' }}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.securityValue}
                        className="du-c-d-item-2-select"
                        onChange={this.handleSecurityChange}>
                        <MenuItem value={0}>
                          <em>Security Status</em>
                        </MenuItem>
                        <MenuItem value={1}>Safe</MenuItem>
                        <MenuItem value={2}>Banned</MenuItem>
                      </Select>
                    </>
                  ) : (
                    <>
                      <Lock className="profileIcon" />
                      <span className="du-c-d-item-1">Security</span>
                      <span className="du-c-d-item-2">Banned</span>
                    </>
                  )}
                </li>
              </ul>
            </div>
            <div className="detailuser-content-option">
              <Link to="/address-list" className="du-c-o-button">
                <button className="du-c-o">
                  <Edit />
                  <span className="du-c-o-text">Address List</span>
                  <ArrowForwardIos />
                </button>
              </Link>
              <Link to="/my-order" className="du-c-o-button">
                <button className="du-c-o">
                  <Edit />
                  <span className="du-c-o-text">Order List</span>
                  <ArrowForwardIos />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DetailUser;
