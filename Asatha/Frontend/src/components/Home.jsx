import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

const Home = ({productName}) =>{
  return (
    <div>
      <body>
          <main>
          <ul className="ba">
            <li><h3>Best Sellers</h3>
            <ProductItem productName={productName} price={21000}/>
            <ProductItem productName={productName} price={21000}/>
            <ProductItem productName={productName} price={21000}/>
              <h3>Underrated Products</h3>
              <div className="row center">
                <div className="item">
                  <a href="/Product">
                    <img className="medium" src={productimg1}  alt="" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2>Apple IMac (2019) 21.5</h2>
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
                        <h2>Apple IMac (2019) 21.5</h2>
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
                          <h2>Apple IMac (2019) 21.5</h2>
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
                    <img className="medium" src={productimg1} alt="" />
                  </a>
                  <div className="item-body">
                    <a href="/Product">
                      <h2>Apple IMac (2019) 21.5</h2>
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
                        <h2>Apple IMac (2019) 21.5</h2>
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
                          <h2>Apple IMac (2019) 21.5</h2>
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
        <footer className="row center">  placeholder text                </footer>
      </body>
  </div>
  );
}

function ProductItem({productName, price}){
  return (  <div className="row center">
              <div className="item">
                <a href="/Product">
                  <img className="medium" src={productimg1} alt="" />
                </a>
                <div className="item-body">
                  <a href="/Product">
                    <h2>{productName}</h2>
                  </a>
                </div>
                <div className="price">{price} LE</div>
              </div>
              </div>
  );
}

export default Home;