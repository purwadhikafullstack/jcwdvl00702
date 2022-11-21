import React from 'react';
import { Button, InputAdornment, Input, FormControl, Container } from '@mui/material';
import { Email } from '@mui/icons-material';

import '../../assets/styles/SignIn.css';

class ForgotPassword extends React.Component {
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
      <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
        <div className="sign-in-main">
          <div className="sign-in-label">Forgot Password</div>
          <div className="create-pass-form">
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
          </div>
          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black', marginTop: '45px' }}
            variant="contained"
            className="sign-in-form-button">
            Send
          </Button>
        </div>
      </Container>
    );
  }
}

export default ForgotPassword;
