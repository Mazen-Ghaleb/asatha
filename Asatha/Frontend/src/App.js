import React, {useEffect ,useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Forgotten from "./components/Forgotten";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./images/add-to-basket.svg";
import Navbar from './components/navbar';

function App() {
    const [state, setState] = useState([]);

    const getData = async () => {
        const response = await fetch("/api");
        const data = await response.json();

        console.log(data);

        setState(data);
    }
  
    useEffect( () => {
        getData();
    },[]);

  return (<Router>
    <head>
        <title>Asatha</title>
    </head>
    <header className="row">

        {/* dynamic navbar attempt */}
       <Navbar ></Navbar>

        {/* dynamic navbar attempt */}

    {/* <p>{!data ? "Loading..." : data}</p> */}
                       {/* <div>
                        {/* <a className="brand" href="/Home">قسطها</a>
                    </div>
                    <div>
                        <input type="text" placeholder="Search..."></input>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button className="drpbtn">Desktops</button>
                            <div className="dropdown-content">
                              {/* <a href="#">link 1</a>
                                <a href="#">link 2</a>
                                <a href="#">link 3</a> */}
                            {/* </div>
                        </div>
                        <div className="dropdown">
                            <button className="drpbtn">Laptops</button>
                            
                        </div>
                        <div className="dropdown">
                            <button className="drpbtn">Apple </button>
                        </div>
                        <div className="dropdown">
                            <button className="drpbtn">Graphics Cards</button>
                        </div>
                        <div className="dropdown">
                            <button className="drpbtn">Accesories</button>
                        </div>
                        <div className="dropdown">
                            <button className="drpbtn">Used</button>
                        </div>
                      </div>
                    <div> 
                        <a href="/Cart">
                            <img className="shpcrt" src={Basket} alt="" />
                        </a>
                        <a className="pi" href="/Login">Login</a>
                        <a className="pi" href="/SignUp">Sign Up</a>
                    </div>  */}
                </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Forgotten" component={Forgotten} />
            <Route path="/Cart" component={Cart} />
            <Route path="/Product" component={Product} />
          </Switch></Router>
  );
}
export default App;