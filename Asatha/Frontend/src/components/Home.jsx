import React, { Component } from 'react';
import Card from './Card';
import recentpurchases from './recentpurchases';

function getProductInfos(props) {
  if (props) {
    if (props.state && props.state2.product) {
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
          {/* {
            <div>
              <pre>{getProductInfos(this.props)}</pre>
            </div>
          } */}
          <main>
            <h3>Best Sellers</h3>
            <div class="row">
              <div className="itemloop">
                {this.props.state2.product ? (
                  this.props.state2.product.slice(0, 5).map((item, index) => {
                    return (
                      <div classname="bestseller" key={index}>
                        <Card
                          img={item.MainImage}
                          category={item.SupplierID}
                          title={item.ProductName}
                          description={item.Description}
                          price={item.UnitPrice}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <h3>Underrated Products</h3>
            <div class="row">
              <div className="itemloop">
                {this.props.state3.product ? (
                  this.props.state3.product.slice(0, 5).map((item, index) => {
                    return (
                      <div classname="cardrows" key={index}>
                        <Card
                          img={item.MainImage}
                          category={item.SupplierID}
                          title={item.ProductName}
                          description={item.Description}
                          price={item.UnitPrice}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>

            <h3>Recent Purchases</h3>
            <div class="row">
              <div className="itemloop">
                {this.props.state4.product ? (
                  this.props.state4.product.slice(0, 5).map((item, index) => {
                    return (
                      <div classname="bestseller" key={index}>
                        <Card
                          img={item.MainImage}
                          category={item.SupplierID}
                          title={item.ProductName}
                          description={item.Description}
                          price={item.UnitPrice}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </main>
          <footer className="r1 center"> placeholder text </footer>
        </body>
      </div>
    );
  }
}
