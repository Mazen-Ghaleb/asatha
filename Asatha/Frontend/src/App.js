import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/Login';
import SignUp from './components/Signup';
import Forgotten from './components/Forgotten';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Navbar from './components/navbar';

function App() {
  const [product, setProduct] = useState([]);
  const [productBestSeller, setProductBestSeller] = useState([]);
  const [productUnderratedProducts, setUnderratedProducts] = useState([]);
  const [productRecentPurchases, setRecentPurchases] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderItem, setOrderItem] = useState([]);

  async function getData(Info, InfoType, InfoFunction) {
    const response = await fetch('/api/' + Info);
    const data = await response.json();
    console.log(data);
    InfoFunction(data);
  }

  useEffect(() => {
    getData('productInfo/BestSellers', productBestSeller, setProductBestSeller);
    getData(
      'productInfo/UnderratedProducts',
      productUnderratedProducts,
      setUnderratedProducts
    );
    getData(
      'productInfo/RecentPurchases',
      productRecentPurchases,
      setRecentPurchases
    );
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
          <Route
            path="/Home"
            component={() => (
              <Home
                state2={productBestSeller}
                state3={productUnderratedProducts}
                state4={productRecentPurchases}
              />
            )}
          />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Forgotten" component={() => <Forgotten />} />
          <Route
            path="/Cart"
            component={() => (
              <Cart state={product} state2={order} state3={orderItem} />
            )}
          />
          <Route
            path="/Product"
            component={() => <Product state={product} />}
          />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
export default App;
