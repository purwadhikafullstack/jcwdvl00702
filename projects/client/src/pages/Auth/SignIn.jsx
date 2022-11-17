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
import { Email, Lock, Visibility, Facebook, Google, Apple, AccountCircle, VisibilityOff } from '@mui/icons-material';
import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import '../../assets/styles/SignIn.css';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
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

  handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="sign-in-main">
        <div className="sign-in-label">Login to Your Account</div>
        <div className="sign-in-form">
          <FormControl variant="standard" className="sign-in-form-input">
            <Input
              name="email"
              onChange={this.inputHandler}
              value={this.state.email}
              id="input-with-icon-adornment"
              sx={{ padding: '7px' }}
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
              placeholder="Email"
            />
          </FormControl>

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

          <FormControlLabel control={<Checkbox />} label="Remember Me" className="sign-in-form-check" />

          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black' }}
            variant="contained"
            className="sign-in-form-button">
            Sign in
          </Button>

          <div className='"sign-in-form-forgot'>Forgot the password ?</div>
        </div>
        <div className="sign-in-social">
          <div className="sign-in-social-1">or continue with</div>
          <div classname="sign-in-social-2" style={{ display: 'flex', flexDirection: 'row' }}>
            <div classname="sign-in-social-2-fb">
              <FacebookLoginButton style={{ fontSize: '12px' }} onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-g">
              <GoogleLoginButton style={{ fontSize: '12px' }} onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-a">
              <TwitterLoginButton style={{ fontSize: '12px' }} onClick={() => alert('Hello')} />
            </div>
          </div>
        </div>
        <div className="sign-in-register">
          <div className="sign-in-register-1">Don't have an account? </div>
          <div className="sign-in-register-2"> Sign up</div>
        </div>
      </div>
    );
  }
}

export default SignIn;
