import React from 'react';
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  InputAdornment,
  Input,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  FilledInput,
} from '@mui/material';
import { Email, Lock, Visibility, Facebook, Google, Apple, VisibilityOff } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FacebookLoginButton, AppleLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import '../../assets/styles/SignIn.css';

class CreatePassword extends React.Component {
  state = {
    password: '',
    repassword: '',
    showPassword: false,
    showRepassword: false,
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleClickShowPassword = () => {
    this.setState({
      ...this.state,
      showPassword: !this.state.showPassword,
    });
  };

  handleClickShowRepassword = () => {
    this.setState({
      ...this.state,
      showRepassword: !this.state.showRepassword,
    });
  };

  handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="sign-in-main">
        <div className="sign-in-label">Create Your Account</div>
        <div className="sign-in-form">
          <FormControl variant="standard" className="sign-in-form-input">
            <Input
              name="password"
              onChange={this.inputHandler}
              value={this.state.password}
              id="input-with-icon-adornment"
              sx={{ padding: '7px' }}
              type={this.state.showPassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowPassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge="end">
                    {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Password"
            />
          </FormControl>

          <FormControl variant="standard" className="sign-in-form-input">
            <Input
              name="repassword"
              onChange={this.inputHandler}
              value={this.state.repassword}
              id="input-with-icon-adornment"
              sx={{ padding: '7px' }}
              type={this.state.showRepassword ? 'text' : 'password'}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={this.handleClickShowRepassword}
                    onMouseDown={this.handleMouseDownPassword}
                    edge="end">
                    {this.state.showRepassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Re-enter Password"
            />
          </FormControl>

          <FormControlLabel control={<Checkbox />} label="Agree to Terms & Conditions" className="sign-in-form-check" />

          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black' }}
            variant="contained"
            className="sign-in-form-button">
            Sign up
          </Button>

          <div className='"sign-in-form-forgot'>*</div>
        </div>
      </div>
    );
  }
}

export default CreatePassword;
