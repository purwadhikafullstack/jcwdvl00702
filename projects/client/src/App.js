import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SignUp from './pages/Auth/SignUp';
import CreatePassword from './pages/Auth/CreatePassword';
import MyOrder from './pages/MyOrder';
import ProductDetail from './pages/ProductDetail';
import ChangePassword from './pages/Auth/PasswordChange/ChangePassword';
import ResetPassword from './pages/Auth/PasswordChange/ResetPassword';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={SignIn} path="/sign-in" />
        <Route component={ForgotPassword} path="/forgot-password" />
        <Route component={SignUp} path="/sign-up" />
        <Route component={CreatePassword} path="/create-password" />
        <Route component={MyOrder} path="/my-order" />
        <Route component={ProductDetail} path="/product-detail" />
        <Route component={ChangePassword} path="/change-password" />
        <Route component={ResetPassword} path="/reset-password" />
        <Route component={Profile} path="/profile" />
        <Route component={EditProfile} path="/edit-profile" />
      </BrowserRouter>
    );
  }
}

export default App;
