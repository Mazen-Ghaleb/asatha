import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

export default class Cart extends Component {
    render() {
        return (
<html class = "cart-html">
  <div>
      <header id="cart-site-header">
        <div className="cart-container">
          <h1 class = "cart-header">Shopping cart</h1>
        </div>
      </header>

    <div className="cart-container">

      <section id="cart"> 
        <article className="cart-product">
          <header>
            <img className="cart-medium" src={productimg1} alt="" />
              <h3>Remove product</h3>
          </header>
          <div className="cart-content">
            <h1>item one</h1>
            <p>some description goes here</p>
            <div title="You have selected this product"></div>
          </div>
          <footer className="cart-content">

            <span className="cart-qt-minus">-</span>
            <span className="cart-qt">2</span>
            <span className="cart-qt-plus">+</span>

            {/*<h2 className="cart-full-price">29.98€</h2>*/}
            <h2 className="cart-price">price€</h2>
          </footer>
        </article>
        <article className="cart-product">
          <header>
            <img className="cart-medium" src={productimg1} alt="" />
              <h3>Remove product</h3>
          </header>
          <div className="cart-content">
            <h1>item 2</h1>
            <p>some description goes </p>
          </div>
          <footer className="cart-content">

            <span className="cart-qt-minus">-</span>
            <span className="cart-qt">1</span>
            <span className="cart-qt-plus">+</span>

            {/*<h2 className="cart-full-price">79.99€</h2>*/}
            <h2 className="cart-price">price€</h2>
          </footer>
        </article>
        <article className="cart-product">
          <header>
            <img className="cart-medium" src={productimg1} alt="" />
              <h3>Remove product</h3>
          </header>
          <div className="cart-content">
            <h1>item 3</h1>
            <p>some description goes here</p>
          </div>
          <footer className="cart-content">
            <span className="cart-qt-minus">-</span>
            <span className="cart-qt">3</span>
            <span className="cart-qt-plus">+</span>

            {/*<h2 className="cart-full-price">53.99€</h2>*/}
            <h2 className="cart-price">price€</h2>
          </footer>
        </article>
      </section>
    </div>

    <footer id="cart-site-footer">
      <div class="cart-container clearfix">
        <div class="cart-left">

          <h2 class="cart-subtotal">Subtotal: <span>sub total in numbers</span>€</h2>
          <h3 class="cart-tax">Taxes (5%): <span>tax cost in numbers</span>€</h3>
          <h3 class="cart-shipping">Shipping: <span>5.00</span>€</h3>
        </div>

        <div class="cart-right">
          <h1 class="cart-total">Total: <span>total price</span>€</h1>
          <button type="cart-submit" className="cart-btn">Checkout</button>
        </div>

      </div>
    </footer>
  </div>
</html>
        );
    }
}