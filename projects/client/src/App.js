import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import CreatePassword from './Pages/Auth/CreatePassword';
import MyOrder from './Pages/MyOrder';
import ProductDetail from './Pages/ProductDetail';
import ChangePassword from './Pages/Auth/PasswordChange/ChangePassword';
import ResetPassword from './Pages/Auth/PasswordChange/ResetPassword';
import Profile from './Pages/Profile'
import EditProfile from './Pages/EditProfile';
import Footer from "./components/Footer"
import HomePage from "./Pages/HomePage"
import ProductLists from "./Pages/ProductLists"
import ChooseShipping from './Pages/ChooseShipping';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={SignIn} path="/sign-in" />
          <Route component={SignUp} path="/sign-up" />
          <Route component={CreatePassword} path="/create-password" />
          <Route component={MyOrder} path="/my-order" />
          <Route component={ProductDetail} path="/product-detail" />
          <Route component={ProductLists} path="/product-list" />
          <Route component={ChangePassword} path="/change-password" />
          <Route component={ResetPassword} path="/reset-password" />
          <Route component={Profile} path="/profile" />
          <Route component={EditProfile} path="/edit-profile" />
          <Route component={ChooseShipping} path="/choose-shipping" />
          <Route component={HomePage} path="/" />

        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
