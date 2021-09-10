import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

export default class Product extends Component {
    render() {
        return (
<html class="product-html">
    <body class = "product-body">
        <main class="product-container">
            <div>
                <div class="product-left-column">
                    <img class="active" src={productimg1} alt="" />
                </div>
                <div class="product-right-column">
                    <div class="product-description">
                    <span>Category</span>
                    <h1>name</h1>
                    <p>some description should go here</p>
                    </div>

                    <div class="product-configuration">
                        <div class="product-color">
                            <span>The product color</span>
                        </div>
                    </div>
                    <div class="product-price">
                        <span>product price goes here as in 500$</span>
                        <a href="/Home" class="product-cart-btn">Add to cart</a>
                    </div>
                </div>
            </div>
        </main>
    </body>
</html>
        );
    }
}