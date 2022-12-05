import React from 'react';
import { ArrowBack, Email, Warehouse, Map, Work, LocationOn } from '@mui/icons-material';
import {
  Container,
  FormControl,
  Input,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import GoogleMaps from '../../components/GoogleMaps';

import '../../assets/styles/AddWarehouse.css';

class AddWarehouse extends React.Component {
  state = {
    setAdmin: 0,
  };

  handleAdminChange = (event) => {
    this.setState({ ...this.state, setAdmin: event.target.value });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <Container maxWidth="xs" className="mobile">
        <div className="addwh-main">
          <div className="addwh-banner">
            <IconButton onClick={this.goBack}>
              <ArrowBack />
            </IconButton>
            <div className="addwh-banner-text">Add New Warehouse</div>
          </div>
          <div className="addwh-avatar">
            <Button variant="contained" component="label" sx={{ marginLeft: '0px', marginTop: '0px ' }}>
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            <img
              className="addwh-avatar-photo"
              src="https://i.pinimg.com/736x/74/28/e6/7428e6b80ecd09bb6590d7ae175d5400.jpg"
              alt=""
            />
          </div>
          <div className="addwh-map">
            <GoogleMaps />
          </div>
          <div className="addwh-form">
            <FormControl variant="standard" className="adduser-form-input">
              <Input
                name="warehouse"
                id="input-with-icon-adornment"
                sx={{ padding: '7px', border: 'none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Warehouse />
                  </InputAdornment>
                }
                placeholder="Warehouse Name"
              />
            </FormControl>
            <FormControl variant="standard" className="adduser-form-input">
              <Input
                name="email"
                id="input-with-icon-adornment"
                sx={{ padding: '7px', border: 'none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                }
                placeholder="Email"
              />
            </FormControl>
            <FormControl variant="standard" className="adduser-form-input">
              <Input
                name="area"
                id="input-with-icon-adornment"
                sx={{ padding: '7px', border: 'none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <Map />
                  </InputAdornment>
                }
                placeholder="Area (Province)"
              />
            </FormControl>
            <FormControl variant="standard" className="adduser-form-input">
              <Input
                name="city"
                id="input-with-icon-adornment"
                sx={{ padding: '7px', border: 'none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                }
                placeholder="City"
              />
            </FormControl>

            <FormControl variant="standard" className="adduser-form-input">
              <Input
                name="district"
                id="input-with-icon-adornment"
                sx={{ padding: '7px', border: 'none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                }
                placeholder="District"
              />
            </FormControl>
            <FormControl variant="standard" className="adduser-form-input">
              <Input
                name="subdistrict"
                id="input-with-icon-adornment"
                sx={{ padding: '7px', border: 'none' }}
                startAdornment={
                  <InputAdornment position="start">
                    <LocationOn />
                  </InputAdornment>
                }
                placeholder="Sub-District"
              />
            </FormControl>
            <TextField
              sx={{ width: '100%', fontSize: '12px', padding: 0 }}
              id="filled-multiline-static"
              variant="filled"
              multiline
              rows={4}
              label="Warehouse Address"
            />

            <Select
              sx={{ width: '390px' }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={this.state.setAdmin}
              className="apc-card-icon-select"
              onChange={this.handleAdminChange}>
              <MenuItem value={0}>
                <em>
                  <Work />
                  Choose Admin Warehouse
                </em>
              </MenuItem>
              <MenuItem value={1}>Maria Marcelinus</MenuItem>
              <MenuItem value={2}>Dean Febrius</MenuItem>
              <MenuItem value={3}>Chosua Glen</MenuItem>
              <MenuItem value={4}>Reynaldy Septian</MenuItem>
            </Select>
          </div>

          <div className="addwh-button">
            <button class="addwh-button-2">Add New Warehouse</button>
          </div>
        </div>
      </Container>
    );
  }
}

export default AddWarehouse;
