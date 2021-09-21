import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Forgotten from './components/Forgotten';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/navbar';

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
      </Switch>
    </Router>
  );
}
export default App;
