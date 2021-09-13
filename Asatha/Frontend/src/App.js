import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup';
import Forgotten from './components/Forgotten';
import Cart from './components/Cart';
import Home from './components/Home';
import Product from './components/Product';
import Basket from './images/add-to-basket.svg';
import Navbar from './components/navbar';

function App() {
  const [state, setState] = useState([]);

  const getData = async () => {
    const response = await fetch('/api/customerInfo');
    const data = await response.json();

    console.log(data);

    setState(data);
  };

  useEffect(() => {
    getData();
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
        <Route exact path="/" component={() => <Home state={state} />} />
        <Route path="/Home" component={() => <Home state={state} />} />
        <Route path="/Login" component={() => <Login state={state} />} />
        <Route path="/SignUp" component={() => <SignUp state={state} />} />
        <Route
          path="/Forgotten"
          component={() => <Forgotten state={state} />}
        />
        <Route path="/Cart" component={() => <Cart state={state} />} />
        <Route path="/Product" component={() => <Product state={state} />} />
      </Switch>
    </Router>
  );
}
export default App;
