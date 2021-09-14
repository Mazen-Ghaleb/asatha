import React, { useEffect, useState } from 'react';
import {useAuth} from './contexts/AuthContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login2';
import SignUp from './components/SignUp';
import Forgotten from './components/Forgotten';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Basket from './images/add-to-basket.svg';
import Navbar from './components/navbar';
import SignUp2 from "./components/SignUp2";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom;"
import Dashboard from "./components/Dashboard";
import LogIn2 from "./components/Login2";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/updatedProfile";

function App() {
  const [customer, setCustomer] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [product, setProduct] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderItem, setOrderItem] = useState([]);

  async function getData(Info, InfoType, InfoFunction) {
    const response = await fetch('/api/' + Info);
    const data = await response.json();

    InfoFunction(data);
  }

  useEffect(() => {
    getData('customerInfo', customer, setCustomer);
    getData('supplierInfo', supplier, setProduct);
    getData('productInfo', product, setProduct);
    getData('orderInfo', order, setOrder);
    getData('orderItemInfo', orderItem, setOrderItem);
  }, []);

  return (
    <Router>
      <AuthProvider>
      <head>
        <title>Asatha</title>
      </head>
      <header className="r1">
        <Navbar></Navbar>
      </header>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route path="/Home" component={() => <Home state={product} />} />
        <Route path="/Login" component={() => <Login state={customer} />} />
        <Route path="/SignUp" component={() => <SignUp state={customer} />} />
        <Route
          path="/Forgotten"
          component={() => <Forgotten state={customer} />}
        />
        <Route
          path="/Cart"
          component={() => (
            <Cart state={product} state2={order} state3={orderItem} />
          )}
        />
        <Route path="/Product" component={() => <Product state={product} />} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <Route path="/SignUp2" component={SignUp2} />
        <Route path="/logIn" component={LogIn2} />
        <Route path="/forgot-password" component={ForgotPassword} />
      </Switch>
      </AuthProvider>
    </Router>
  );
}
export default App;
