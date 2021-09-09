import React, { Component } from "react";

export default class Home extends Component {
    render() {
        return (
           <div>
    <head>
        <link rel="stylesheet" href="style.css"/>
        <title>Asatha</title>
    </head>
    <body>
    <header class="row">
                       <div>
                        <a class="brand" href="/Home">قسطها</a>
                    </div>
                    <div class="xd">
                        <input type="text" placeholder="search.."></input>
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
                            <img class="shpcrt" src="../images/add-to-basket.svg" />
                        </a>
                        <a class="pi" href="/Login">Login</a>
                        <a class="pi" href="/SignUp">Sign Up</a>
                    </div>
                </header>

                <main>
        <ul className="ba">
          <li><h3>Best Sellers</h3>
            <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src="../images/product-1.jpg" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2>Apple IMac (2019) 21.5"</h2>
                  </a>
                </div>
                <div className="price">21,000 LE</div>
              </div>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src="../images/product-1.jpg" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2>Apple IMac (2019) 21.5"</h2>
                    </a>
                  </div>
                  <div className="price">21,000 LE</div>
                </div>
                <div className="row center">
                  <div className="item">
                    <a href="/Product">
                      <img className="medium" src="../images/product-1.jpg" />
                    </a>
                    <div className="item-body">
                      <a href="/Product">
                        <h2>Apple IMac (2019) 21.5"</h2>
                      </a>
                    </div>
                    <div className="price">21,000 LE</div>
                  </div>
                </div></div></div></li> 
          <li>
            <h3>Underrated Products</h3>
            <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src="../images/product-1.jpg" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2>Apple IMac (2019) 21.5"</h2>
                  </a>
                </div>
                <div className="price">21,000 LE</div>
              </div>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src="../images/product-1.jpg" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2>Apple IMac (2019) 21.5"</h2>
                    </a>
                  </div>
                  <div className="price">21,000 LE</div>
                </div>
                <div className="row center">
                  <div className="item">
                    <a href="/Product">
                      <img className="medium" src="../images/product-1.jpg" />
                    </a>
                    <div className="item-body">
                      <a href="/Product">
                        <h2>Apple IMac (2019) 21.5"</h2>
                      </a>
                    </div>
                    <div className="price">21,000 LE</div>
                  </div>
                </div></div></div></li> 
          <li>
            <h3>Recent Purchases</h3>
            <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src="../images/product-1.jpg" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2>Apple IMac (2019) 21.5"</h2>
                  </a>
                </div>
                <div className="price">21,000 LE</div>
              </div>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src="../images/product-1.jpg" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2>Apple IMac (2019) 21.5"</h2>
                    </a>
                  </div>
                  <div className="price">21,000 LE</div>
                </div>
                <div className="row center">
                  <div className="item">
                    <a href="/Product">
                      <img className="medium" src="../images/product-1.jpg" />
                    </a>
                    <div className="item-body">
                      <a href="/Product">
                        <h2>Apple IMac (2019) 21.5"</h2>
                      </a>
                    </div>
                    <div className="price">21,000 LE</div>
                  </div>
                </div></div></div></li> 
        </ul>
      </main>
      <footer class="row center">  placeholder text                </footer>
    </body>
           </div>
        );
    }
}