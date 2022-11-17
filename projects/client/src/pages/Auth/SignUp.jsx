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
import { Email, Lock, Visibility, Person } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import '../../assets/styles/SignIn.css';

class SignUp extends React.Component {
  state = {
    email: '',
    fullname: '',
  };

  inputHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in-main">
        <div className="sign-in-label">Create Your Account</div>
        <div className="sign-in-form">
          <FormControl variant="standard" className="sign-in-form-input">
            <Input
              name="email"
              onChange={this.inputHandler}
              value={this.state.email}
              id="input-with-icon-adornment"
              sx={{ padding: '12px' }}
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
              name="fullname"
              onChange={this.inputHandler}
              value={this.state.fullname}
              id="input-with-icon-adornment"
              sx={{ padding: '12px' }}
              startAdornment={
                <InputAdornment position="start">
                  <Person />
                </InputAdornment>
              }
              placeholder="Full Name"
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
        <div className="sign-in-social">
          <div className="sign-in-social-1">or continue with</div>
          <div classname="sign-in-social-2" style={{ display: 'flex' }}>
            <div classname="sign-in-social-2-fb">
              <FacebookLoginButton onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-g">
              <GoogleLoginButton onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-a">
              <TwitterLoginButton onClick={() => alert('Hello')} />
            </div>
          </div>
        </div>
        <div className="sign-in-register">
          <div className="sign-in-register-1">Already have an account? </div>
          <div className="sign-in-register-2"> Sign in</div>
        </div>
      </div>
    );
  }
}

export default SignUp;
