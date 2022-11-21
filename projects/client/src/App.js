import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn';
import ForgotPassword from './pages/Auth/ForgotPassword';
import SignUp from './pages/Auth/SignUp';
import CreatePassword from './pages/Auth/CreatePassword';
import MyOrder from './pages/MyOrder';
import ProductDetail from './pages/ProductDetail';
import ChangePassword from './pages/Auth/PasswordChange/ChangePassword';
import ResetPassword from './pages/Auth/PasswordChange/ResetPassword';
<<<<<<< HEAD
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductLists from './pages/ProductLists';
=======
<<<<<<< HEAD
import Profile from './pages/Profile'
import EditProfile from './pages/EditProfile';
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ProductLists from "./pages/ProductLists"
=======
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
>>>>>>> 0a0d76ad (Feature MWA-41: Rev-1)
>>>>>>> 94694b31 (Feature MWA-41: Rev-1)

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
<<<<<<< HEAD
        <Switch>
          <Route component={SignIn} path="/sign-in" />
          <Route component={ForgotPassword} path="/forgot-password" />
          <Route component={SignUp} path="/sign-up" />
          <Route component={CreatePassword} path="/create-password" />
          <Route component={MyOrder} path="/my-order" />
          <Route component={ProductDetail} path="/product-detail" />
          <Route component={ProductLists} path="/product-list" />
          <Route component={ChangePassword} path="/change-password" />
          <Route component={ResetPassword} path="/reset-password" />
          <Route component={Profile} path="/profile" />
          <Route component={EditProfile} path="/edit-profile" />
          <Route component={HomePage} path="/" />
        </Switch>
        <Footer />
=======
        <Route component={SignIn} path="/sign-in" />
        <Route component={SignUp} path="/sign-up" />
        <Route component={CreatePassword} path="/create-password" />
        <Route component={MyOrder} path="/my-order" />
        <Route component={ProductDetail} path="/product-detail" />
        <Route component={ChangePassword} path="/change-password" />
        <Route component={ResetPassword} path="/reset-password" />
        <Route component={Profile} path="/profile" />
        <Route component={EditProfile} path="/edit-profile" />
>>>>>>> 6d11b552 (Feature MWA-41: Rev-1)
      </BrowserRouter>
    );
  }
}

export default App;
