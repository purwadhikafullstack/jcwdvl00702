import logo from './logo.svg';
import './App.css';
import ProductDetail from './pages/ProductDetail';
import ChangePassword from './pages/Auth/PasswordChange/ChangePassword';
import ResetPassword from './pages/Auth/PasswordChange/ResetPassword';
import {
  BrowserRouter as Router,
  // Routes,
  Route,
  // Navigate,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    // <ResetPassword/>
    // <ChangePassword/>
    // <ProductDetail/>
    <Router>
      <Switch>
        <Route exact path="/" component={ChangePassword}/>
        <Route path ='/resetpass' component={ResetPassword}/>
        <Route path ='/productdetail' component={ProductDetail}/>
      </Switch>
    </Router>
  );
}

export default App;
