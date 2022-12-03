import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import CreatePassword from './pages/Auth/CreatePassword';
import MyOrder from './pages/MyOrder';
import Dashboard from './pages/Admin/Dashboard';
import UserList from './pages/Admin/UserList';
import DetailUser from './pages/Admin/DetailUser';
import AddUser from './pages/Admin/AddUser';
import ProductCategory from './pages/Admin/ProductCategory';
import ProductListAdmin from './pages/Admin/ProductListAdmin';
import ProductDetailAdmin from './pages/Admin/ProductDetailAdmin';
import ProductAdd from './pages/Admin/ProductAdd';
import WarehouseManagement from './pages/Admin/WarehouseManagement';
import AddWarehouse from './pages/Admin/AddWarehouse';
import DetailWarehouse from './pages/Admin/DetailWarehouse';
import StockMutation from './pages/Admin/StockMutation';
import OrderList from './pages/Admin/OrderList';
import StockHistory from './pages/Admin/StockHistory';
import ProductStockHistory from './pages/Admin/ProductStockHistory';

import ProductDetail from './pages/ProductDetail';
import ChangePassword from './pages/Auth/PasswordChange/ChangePassword';
import ResetPassword from './pages/Auth/PasswordChange/ResetPassword';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductLists from './pages/ProductLists';
import ChooseShipping from './pages/ChooseShipping';
import AddressList from './pages/AddressList';
import NewAddress from './pages/NewAddress';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import HomeFunc from './pages/HomeFunc';
import { AuthProvider } from './context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { firebaseAuthentication } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginUser } from './redux/actionCreators/authActionCreators';
import Axios from 'axios';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebaseAuthentication.onAuthStateChanged((user) => {
      const data = {
        user: user.providerData[0],
        id: user.uid,
      };
      Axios.get(`http://localhost:3300/api/admin/get-user-one/${data.id}`)
        .then((res) => {
          const getRes = res.data;
          const dataPersist = {
            user: getRes.result,
            id: getRes.result.customer_uid,
          };
          dispatch(loginUser(dataPersist));
        })
        .catch((error) => {
          console.log(error);
          alert(error);
        });
      // dispatch(loginUser(data))
    });
  }, []);

  const user = useSelector((state) => ({
    user: state.auth.user,
  }));
  const mainUser = user.user;

  return (
    // <AuthProvider>
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in">{mainUser ? <Redirect to="/" /> : <SignIn />}</Route>
        <Route path="/sign-up">{mainUser ? <Redirect to="/" /> : <SignUp />}</Route>
        <Route component={CreatePassword} path="/create-password" />
        <Route component={MyOrder} path="/my-order" />
        <Route component={Dashboard} path="/dashboard" />
        {/* <Route path="/dashboard">{mainUser.role=="user" ? <Redirect to="/"/> : <Dashboard/>}</Route> */}
        <Route component={Dashboard} path="dashboard" />
        <Route component={UserList} path="/user-list" />
        <Route component={DetailUser} path="/detail-user" />
        <Route component={AddUser} path="/add-user" />
        <Route component={ProductCategory} path="/products-management-category" />
        <Route component={ProductListAdmin} path="/products-management-list" />
        <Route component={ProductDetailAdmin} path="/products-management-detail" />
        <Route component={ProductAdd} path="/products-management-add" />
        <Route component={WarehouseManagement} path="/warehouse-management" />
        <Route component={AddWarehouse} path="/add-warehouse" />
        <Route component={DetailWarehouse} path="/detail-warehouse" />
        <Route component={StockMutation} path="/stock-mutation" />
        <Route component={OrderList} path="/order-list" />
        <Route component={StockHistory} path="/stock-history" />
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
        {/* <Route path="/">{mainUser.role=="admin" ? <Redirect to="/dashboard"/> : <HomeFunc/>}</Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
    //  </AuthProvider>
  );
}
