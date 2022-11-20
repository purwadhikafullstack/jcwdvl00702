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
  Container,
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff, AccountCircle } from '@mui/icons-material';
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
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="sign-in-main">
          <div className="sign-in-label">Create Your Account</div>
          <div className="create-pass-form">
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
          </div>
          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black', marginTop: '45px' }}
            variant="contained"
            className="sign-in-form-button">
            Create Password
          </Button>
        </div>
      </Container>
    );
  }
}

export default CreatePassword;
