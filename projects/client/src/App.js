import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import CreatePassword from "./pages/Auth/CreatePassword";
import MyOrder from "./pages/MyOrder";
import Dashboard from "./pages/Admin/Dashboard";
import UserList from "./pages/Admin/UserList";
import DetailUser from "./pages/Admin/DetailUser";
import AddUser from "./pages/Admin/AddUser";
import ProductCategory from "./pages/Admin/ProductCategory";
import ProductListAdmin from "./pages/Admin/ProductListAdmin";
import ProductDetailAdmin from "./pages/Admin/ProductDetailAdmin";
import ProductAdd from "./pages/Admin/ProductAdd";

import ProductDetail from "./pages/ProductDetail";
import ChangePassword from "./pages/Auth/PasswordChange/ChangePassword";
import ResetPassword from "./pages/Auth/PasswordChange/ResetPassword";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductLists from "./pages/ProductLists";
import ChooseShipping from "./pages/ChooseShipping";
import AddressList from "./pages/AddressList";
import NewAddress from "./pages/NewAddress";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import HomeFunc from "./pages/HomeFunc";
import { AuthProvider } from "./context/AuthProvider";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route component={SignIn} path="/sign-in" />
            <Route component={SignUp} path="/sign-up" />
            {/* <Route component={CreatePassword} path="/create-password" /> */}
            <Route component={MyOrder} path="/my-order" />
            <Route component={Dashboard} path="/dashboard" />
            <Route component={UserList} path="/user-list" />
            <Route component={DetailUser} path="/detail-user" />
            <Route component={AddUser} path="/add-user" />
            <Route
              component={ProductCategory}
              path="/products-management-category"
            />
            <Route
              component={ProductListAdmin}
              path="/products-management-list"
            />
            <Route
              component={ProductDetailAdmin}
              path="/products-management-detail"
            />
            <Route component={ProductAdd} path="/products-management-add" />
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
            <Route component={HomeFunc} path="/" />
            {/* <Route component={HomePage} path="/" /> */}
          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    );
  }
}

export default App;
