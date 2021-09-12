import React, {useEffect ,useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Forgotten from "./components/Forgotten";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./images/add-to-basket.svg";

function App() {
    const [productName, setProductName] = useState("hallo!");
/*
    const getData = async () => {
        const response = await fetch("home");
        const data = await response.json();
        //console.log(data);
        setProductName(data.message);
        //console.log(productName);
    }
    useEffect( () => {
        getData();
    },[]);
*/
    console.log(productName);
    const [dbm, setdbMessage] = useState("db initial state");

    const getDB = async () => {
        const response2 = await fetch("home");
        const data2 = await response2.json();
        //console.log(data);
        setdbMessage(data2.message);
        //console.log(databaseMessage);
    }
    useEffect( () => {
        getDB();
    },[]);

    console.log(dbm);

  return (<Router>
    <head>
        <title>Asatha</title>
    </head>
    <header className="row">
    {/* <p>{!data ? "Loading..." : data}</p> */}
                       <div>
                        <a className="brand" href="/Home">قسطها</a>
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
                            </div>
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
                    </div>
                </header>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Home" component={()=><Home productName={productName}/>} />
            <Route path="/Login" component={()=><Login productName={productName}/>} />
            <Route path="/SignUp" component={()=><SignUp productName={productName}/>} />
            <Route path="/Forgotten" component={<Forgotten productName={productName}/>} />
            <Route path="/Cart" component={()=><Cart productName={productName}/>} />
            <Route path="/Product" component={()=><Product productName={productName}/>} />
          </Switch></Router>
  );
}
export default App;