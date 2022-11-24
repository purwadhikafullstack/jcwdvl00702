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
  ClickAwayListener,
  InputBase,
  Stack,
  Pagination,
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
  Search,
  PersonAdd,
  ArrowBack,
  Person,
  Email,
  Edit,
  ArrowForwardIos,
  Badge,
  Schedule,
  VerifiedUser,
  Lock,
} from '@mui/icons-material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/DetailUser.css';

class DetailUser extends React.Component {
  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="detailuser-main">
          <div className="detailuser-banner">
            <Link to="/user-list">
              <IconButton>
                <ArrowBack />
              </IconButton>
            </Link>
            <div className="detailuser-banner-text">User Detail</div>
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
            <Link to="/edit-user" className="userlist-banner-menu-link">
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,204,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                className="detailuser-banner-edit">
                Edit
              </Button>
            </Link>
          </div>
          <div className="detailuser-content">
            <div className="detailuser-content-avatar">
              <img
                className="profileUserImg"
                src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                alt=""
              />
            </div>
            <div className="detailuser-content-detail">
              <ul className="du-c-d-data">
                <li className="du-c-d-item">
                  <Badge className="profileIcon" />
                  <span className="du-c-d-item-1">ID User</span>
                  <span className="du-c-d-item-2">19450817110256</span>
                </li>
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
                  <Lock className="profileIcon" />
                  <span className="du-c-d-item-1">Security</span>
                  <span className="du-c-d-item-2">Banned</span>
                </li>
              </ul>
            </div>
            <div className="detailuser-content-option">
              <button className="du-c-o">
                <Edit />
                <span className="du-c-o-text">Address List</span>
                <ArrowForwardIos />
              </button>
              <button className="du-c-o">
                <Edit />
                <span className="du-c-o-text">Order List</span>
                <ArrowForwardIos />
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default DetailUser;
