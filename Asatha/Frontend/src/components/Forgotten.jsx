import React, { Component } from "react";

const Forgotten = ({productName}) =>{
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            <form>
            <h3>Forgtten Password</h3>

            <div className="form-group">
                <label>Email Address</label>
                <br/>
                <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
                <label>Confirm Email Address</label>
                <br/>
                <input type="email" className="form-control" placeholder="Confirm Email" />
            </div>
            <br/>
            <button type="submit" className="Accountbtn">Send Reset Request</button>
            </form>
            </div> 
        </div>
     );
}

/*this function is made to reduce redundancy in html*/
/*you can use a loop to call it multiple times*/
function randomFunction({productName, price}){
    return (<p>the following is the name in the parameter{productName}
    and this is the price in the parameter{price}</p>);
}
  
export default Forgotten;