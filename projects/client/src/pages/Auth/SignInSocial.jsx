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
import { Email, Lock, Visibility, Facebook, Google, Apple } from '@mui/icons-material';
import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import '../../assets/styles/SignIn.css';

class SignInSocial extends React.Component {
  render() {
    return (
      <div className="sign-in-main">
        <img
          src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
          className="sign-in-picture"
          alt="Logo"
        />

        <div className="sign-in-label">Let's you in</div>

        <div className="sign-in-social-social">
          <div className="sign-in-social-1">or</div>
          <div classname="sign-in-social-2-2" style={{ flexDirection: 'column', alignContent: 'center' }}>
            <div classname="sign-in-social-2-fb">
              <FacebookLoginButton style={{ fontSize: '16px' }} onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-g">
              <GoogleLoginButton style={{ fontSize: '16px' }} onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-a">
              <TwitterLoginButton style={{ fontSize: '16px' }} onClick={() => alert('Hello')} />
            </div>
          </div>
        </div>

        <div className="sign-in-social-form">
          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black' }}
            variant="contained"
            className="sign-in-form-button">
            Sign in with password
          </Button>
        </div>

        <div className="sign-in-register">
          <div className="sign-in-register-1">Don't have an account? </div>
          <div className="sign-in-register-2"> Sign up</div>
        </div>
      </div>
    );
  }
}

export default SignInSocial;
