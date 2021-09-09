import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Forgotten from "./components/Forgotten";
import Cart from "./components/Cart";
import Home from "./components/Home";
import productimg1 from "./images/add-to-basket.svg";

function App() {
  return (<Router>
    <div className="App">
    <head>
        <title>Asatha</title>
    </head>
    <header class="row">
                       <div>
                        <a class="brand" href="/Home">قسطها</a>
                    </div>
                    <div class="xd">
                        <input type="text" placeholder="Search..."></input>
                    </div>
                    <div class="topnav">
                        <div class="dropdown">
                            <button class="drpbtn">Desktops</button>
                            <div class="dropdown-content">
                              {/* <a href="#">link 1</a>
                                <a href="#">link 2</a>
                                <a href="#">link 3</a> */}
                            </div>
                        </div>
                        <div class="dropdown">
                            <button class="drpbtn">Laptops</button>
                            
                        </div>
                        <div class="dropdown">
                            <button class="drpbtn">Apple </button>
                        </div>
                        <div class="dropdown">
                            <button class="drpbtn">Graphics Cards</button>
                        </div>
                        <div class="dropdown">
                            <button class="drpbtn">Accesories</button>
                        </div>
                        <div class="dropdown">
                            <button class="drpbtn">Used</button>
                        </div>
                      </div>
                    <div> 
                        <a href="/Cart">
                            <img class="shpcrt" src={productimg1} alt="" />
                        </a>
                        <a class="pi" href="/Login">Login</a>
                        <a class="pi" href="/SignUp">Sign Up</a>
                    </div>
                </header>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Forgotten" component={Forgotten} />
            <Route path="/Cart" component={Cart} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}



    {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/Home"}>قسطها</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/SignUp"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
export default App;