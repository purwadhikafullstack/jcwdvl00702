import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import CreatePassword from "./pages/Auth/CreatePassword";
import MyOrder from "./pages/MyOrder";
import ProductDetail from "./pages/ProductDetail";
import ChangePassword from "./pages/Auth/PasswordChange/ChangePassword";
import ResetPassword from "./pages/Auth/PasswordChange/ResetPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductLists from "./pages/ProductLists";
import ChooseShipping from "./pages/ChooseShipping";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import AddressList from "./pages/AddressList";
import NewAddress from "./pages/NewAddress";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={SignIn} path="/sign-in" />
          <Route component={ForgotPassword} path="/forgot-password" />
          <Route component={SignUp} path="/sign-up" />
          <Route component={CreatePassword} path="/create-password" />
          <Route component={MyOrder} path="/my-order" />
          <Route component={ProductDetail} path="/product-detail" />
          <Route component={ProductLists} path="/product-list" />
          <Route component={AddressList} path="/address-list" />
          <Route component={NewAddress} path="/add-address" />
          <Route component={ChangePassword} path="/change-password" />
          <Route component={ResetPassword} path="/reset-password" />
          <Route component={Profile} path="/profile" />
          <Route component={EditProfile} path="/edit-profile" />
          <Route component={ChooseShipping} path="/choose-shipping" />
          <Route component={Cart} path="/cart" />
          <Route component={Checkout} path="/checkout" />
          <Route component={HomePage} path="/" />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
