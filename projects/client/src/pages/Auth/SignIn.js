import React from 'react';
import {
  Checkbox,
  FormControlLabel,
  Button,
  InputAdornment,
  Input,
  FormControl,
  IconButton,
<<<<<<< HEAD
=======
  InputLabel,
  FilledInput,
>>>>>>> f2d24fa3 (Feature MWA-41: Rev.2)
  Container,
} from '@mui/material';
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material';
import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import { Link } from 'react-router-dom';

import '../../assets/styles/SignIn.css';

class SignIn extends React.Component {
  state = {
    email: '',
    password: '',
    withPassword: false,
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

  handleChange = (event, value) => {
    this.setState({ ...this.state, withPassword: true });
  };

  render() {
    return (
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="sign-in-main">
          {this.state.withPassword ? (
            <div className="sign-in-submain">
              <div className="sign-in-label">Login to Your Account</div>
              <div className="sign-in-form">
                <FormControl variant="standard" className="sign-in-form-input">
                  <Input
                    name="email"
                    onChange={this.inputHandler}
                    value={this.state.email}
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

                <div className="sign-in-form-check">
                  <FormControlLabel control={<Checkbox />} sx={{ marginRight: '0px' }} />
                  <div>Remember Me</div>
                </div>

                <Button
                  sx={{ borderRadius: '20px', backgroundColor: 'black' }}
                  variant="contained"
                  className="sign-in-form-button">
                  Sign in
                </Button>

                <Link to="/forgot-password" className="sign-in-form-forgot">
                  Forgot the password ?
                </Link>
              </div>
              <div className="sign-in-social">
                <div className="sign-in-social-1">or continue with</div>
                <div classname="sign-in-social-2" style={{ display: 'flex', flexDirection: 'row', marginLeft: '82px' }}>
                  <div classname="sign-in-social-2-fb">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
                      </svg>
                    </IconButton>
                  </div>
                  <div classname="sign-in-social-2-g">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                      </svg>
                    </IconButton>
                  </div>
                  <div classname="sign-in-social-2-a">
                    <IconButton>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48">
                        <path
                          fill="#03A9F4"
                          d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                      </svg>
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="sign-in-submain">
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
                  className="sign-in-form-button"
                  onClick={this.handleChange}>
                  Sign in with password
                </Button>
              </div>
            </div>
          )}

          <div className="sign-in-register">
            <div className="sign-in-register-1">Don't have an account? </div>
            <Link to="/sign-up" className="sign-in-register-2">
              Sign up
            </Link>
          </div>
        </div>
      </Container>
    );
  }
}

export default SignIn;
