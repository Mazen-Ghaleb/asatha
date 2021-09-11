import React, { Component } from "react";
import productimg1 from "../images/product-1.jpg";

const Product = ({productName}) => {
    return (
        <html className="product-html">
            <body className = "product-body">
                <main className="product-container">
                    <div>
                        <div className="product-left-column">
                            <img className="active" src={productimg1} alt="" />
                        </div>
                        <div className="product-right-column">
                            <div className="product-description">
                            <span>Category</span>
                            <h1>name</h1>
                            <p>some description should go here</p>
                            </div>

                            <div className="product-configuration">
                                <div className="product-color">
                                    <span>The product color</span>
                                </div>
                            </div>
                            <div className="product-price">
                                <span>product price goes here as in 500$</span>
                                <a href="/Home" className="product-cart-btn">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </main>
            </body>
        </html>
    );
}

/*this function is made to reduce redundancy in html*/
/*you can use a loop to call it multiple times*/
function randomFunction({productName, price}){
    return (<p>the following is the name in the parameter{productName}
    and this is the price in the parameter{price}</p>);
}

export default Product;