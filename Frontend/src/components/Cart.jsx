import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

export default class Cart extends Component {
    render() {
        return (
           <div>
               <header id="site-header">
    <div class="container">
      <h1>Shopping cart</h1>
    </div>
  </header>

  <div class="container">

    <section id="cart"> 
      <article class="product">
        <header>

          <img className="medium" src={productimg1} alt="" />

            <h3>Remove product</h3>

        </header>

        <div class="content">

          <h1>Lorem ipsum</h1>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

          <div title="You have selected this product to be shipped in the color yellow." class="color yellow"></div>
          <div class="type small">XXL</div>
        </div>

        <footer class="content">
          <span class="qt-minus">-</span>
          <span class="qt">2</span>
          <span class="qt-plus">+</span>

          <h2 class="full-price">
            29.98€
          </h2>

          <h2 class="price">
            14.99€
          </h2>
        </footer>
      </article>

      <article class="product">
        <header>
          <img className="medium" src={productimg1} alt="" />
            <h3>Remove product</h3>

        </header>

        <div class="content">

          <h1>Lorem ipsum dolor</h1>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

          <div class="color red"></div>
          <div class="type small">Small</div>
        </div>

        <footer class="content">
          
          <span class="qt-minus">-</span>
          <span class="qt">1</span>
          <span class="qt-plus">+</span>

          <h2 class="full-price">
            79.99€
          </h2>

          <h2 class="price">
            79.99€
          </h2>
        </footer>
      </article>

      <article class="product">
        <header>

          <img className="medium" src={productimg1} alt="" />
            <h3>Remove product</h3>

        </header>

        <div class="content">

          <h1>Lorem ipsum dolor ipsdu</h1>

          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta, numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.

          <div class="color blue"></div>
          <div class="type small">Large</div>
        </div>

        <footer class="content">
          
          <span class="qt-minus">-</span>
          <span class="qt">3</span>
          <span class="qt-plus">+</span>

          <h2 class="full-price">
            53.99€
          </h2>

          <h2 class="price">
            17.99€
          </h2>
        </footer>
      </article>

    </section>

  </div>

  <footer id="site-footer">
    <div class="container clearfix">

      <div class="left">
        <h2 class="subtotal">Subtotal: <span>163.96</span>€</h2>
        <h3 class="tax">Taxes (5%): <span>8.2</span>€</h3>
        <h3 class="shipping">Shipping: <span>5.00</span>€</h3>
      </div>

      <div class="right">
        <h1 class="total">Total: <span>177.16</span>€</h1>
        <button type="submit" className="btn">Checkout</button>
      </div>

    </div>
  </footer>
           </div>
        );
    }
}