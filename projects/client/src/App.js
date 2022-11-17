import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn';
import SignInSocial from './pages/Auth/SignInSocial';
import SignUp from './pages/Auth/SignUp';
import Register from './pages/Auth/Register';
import MyOrder from './pages/MyOrder.jsx';
import ProductDetail from './pages/ProductDetail';
import ChangePassword from './pages/Auth/PasswordChange/ChangePassword';
import ResetPassword from './pages/Auth/PasswordChange/ResetPassword';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={SignIn} path="/sign-in" />
        <Route component={SignInSocial} path="/sign-in-social" />
        <Route component={SignUp} path="/sign-up" />
        <Route component={Register} path="/register" />
        <Route component={MyOrder} path="/my-order" />
        <Route component={ProductDetail} path="/product-detail" />
        <Route component={ChangePassword} path="/change-password" />
        <Route component={ResetPassword} path="/reset-password" />
      </BrowserRouter>
    );
  }
}

export default App;
