import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

export default class Home extends Component {
    render() {
        return (
           <div>
    <body className="homebody">
                <main>
        <ul className="ba">
          <li><h3 className="homeh3">Best Sellers</h3>
            <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src={productimg1} alt="" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                  </a>
                </div>
                <div className="price">21,000 LE</div>
              </div>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src={productimg1} alt="" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                    </a>
                  </div>
                  <div className="price">21,000 LE</div>
                </div>
                <div className="row center">
                  <div className="item">
                    <a href="/Product">
                      <img className="medium" src={productimg1}  alt="" />
                    </a>
                    <div className="item-body">
                      <a href="/Product">
                        <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                      </a>
                    </div>
                    <div className="price">21,000 LE</div>
                  </div>
                </div></div></div></li> 
          <li>
            <h3 className="homeh3">Underrated Products</h3>
            <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src={productimg1}  alt="" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                  </a>
                </div>
                <div className="price">21,000 LE</div>
              </div>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src={productimg1} alt="" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                    </a>
                  </div>
                  <div className="price">21,000 LE</div>
                </div>
                <div className="row center">
                  <div className="item">
                    <a href="/Product">
                      <img className="medium" src={productimg1} alt="" />
                    </a>
                    <div className="item-body">
                      <a href="/Product">
                        <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                      </a>
                    </div>
                    <div className="price">21,000 LE</div>
                  </div>
                </div></div></div></li> 
          <li>
            <h3 className="homeh3">Recent Purchases</h3>
            <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src={productimg1} alt="" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                  </a>
                </div>
                <div className="price">21,000 LE</div>
              </div>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src={productimg1} alt="" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                    </a>
                  </div>
                  <div className="price">21,000 LE</div>
                </div>
                <div className="row center">
                  <div className="item">
                    <a href="/Product">
                      <img className="medium" src={productimg1} alt="" />
                    </a>
                    <div className="item-body">
                      <a href="/Product">
                        <h2 className="homeh2">Apple IMac (2019) 21.5"</h2>
                      </a>
                    </div>
                    <div className="price">21,000 LE</div>
                  </div>
                </div>
              </div>
            </div>
          </li> 
        </ul>
      </main>
      <footer class="row center">  placeholder text                </footer>
    </body>
           </div>
        );
    }
}