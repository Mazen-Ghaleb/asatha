import React, { Component } from 'react';
import productimg1 from '../images/product-1.jpg';

function getProductInfos(props) {
  if (props) {
    if (props.state && props.state.product) {
      // use JSON.Parse to print single attribute without quotations.
      return JSON.stringify(props.state.product, null, 2);
    }
  }
}

export default class Home extends Component {
  render() {
    return (
      <div>
        <body>
          {/* <div>
            <pre>{getProductInfos(this.props)}</pre>
          </div> */}
          <main>
            <h3>Best Sellers</h3>
            <div class="row">
              <div className=" col-lg-3 col-md-4 col-sm-6">
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
              <div className=" col-lg-3 col-md-4 col-sm-6">
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
              <div className=" col-lg-3 col-md-4 col-sm-6">
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
              <div className=" col-lg-3 col-md-4 col-sm-6">
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
            <h3>Underrated Products</h3>
            <div class="row">
              <div className=" col-lg-3 col-md-4 col-sm-6">
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

              <div className=" col-lg-3 col-md-4 col-sm-6">
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

              <div className=" col-lg-3 col-md-4 col-sm-6">
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

              <div className=" col-lg-3 col-md-4 col-sm-6">
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
            <h3>Recent Purchases</h3>
            <div class="row">
              <div className=" col-lg-3 col-md-4 col-sm-6">
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

              <div className=" col-lg-3 col-md-4 col-sm-6">
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

              <div className=" col-lg-3 col-md-4 col-sm-6">
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

              <div className=" col-lg-3 col-md-4 col-sm-6">
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
          </main>
          <footer className="r1 center"> placeholder text </footer>
        </body>
      </div>
    );
  }
}
