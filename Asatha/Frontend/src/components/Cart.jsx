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
function getOrderInfos(props) {
  if (props) {
    if (props.state2 && props.state2.order) {
      // use JSON.Parse to print single attribute without quotations.
      return JSON.stringify(props.state2.order, null, 2);
    }
  }
}
function getOrderItemInfos(props) {
  if (props) {
    if (props.state3 && props.state3.orderItem) {
      // use JSON.Parse to print single attribute without quotations.
      return JSON.stringify(props.state3.orderItem, null, 2);
    }
  }
}

export default class Cart extends Component {
  render() {
    return (
      <html class="cart-html">
        {/* <div>
          <pre>{getProductInfos(this.props)}</pre>
        </div> */}
        <div>
          <header id="cart-site-header">
            <div className="cart-container">
              <h1 class="cart-header">Shopping cart</h1>
            </div>
          </header>
          <div className="cart-container">
            <section id="cart">
              <article className="cart-product">
                <header>
                  <img className="cart-medium" src={productimg1} alt="" />
                  <h3 className="sh"><button className="rmvb">Remove product</button></h3>
                </header>
                <div className="cart-content">
                  <h1>item one</h1>
                  <p>some description goes here</p>
                  <div title="You have selected this product"></div>
                </div>
                
              </article>
            </section> 
          </div>
          <footer id="cart-site-footer">
            <div class="cart-container clearfix">
              <div class="cart-left">
                <h2 class="cart-subtotal">
                  Subtotal: <span>sub total in numbers</span>€
                </h2>
                <h3 class="cart-tax">
                  Taxes (5%): <span>tax cost in numbers</span>€
                </h3>
                <h3 class="cart-shipping">
                  Shipping: <span>5.00</span>€
                </h3>
              </div>
              <div class="cart-right">
                <h1 class="cart-total">
                  Total: <span>total price</span>€
                </h1>
                <button type="cart-submit" className="cart-btn">
                  Checkout
                </button>
              </div>
            </div>
          </footer>
        </div>
      </html>
    );
  }
}
