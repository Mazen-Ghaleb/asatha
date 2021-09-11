import React, { Component } from "react";
//import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const SignUp = ({productName})=>{
    
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
            
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <br/>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <br/>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <br/>
                <input type="email" className="form-control" placeholder="Email" />
            </div>

            <div className="form-group">
                <label>Username</label>
                <br/>
                <input type="text" className="form-control" placeholder="Username" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <br/>
                <input type="password" className="form-control" placeholder="Password" />
            </div>

            <div className="form-group">
                <label>Birthdate</label>
                <br/>
                <input type="Date" className="form-control" placeholder="Birthdate" />
            </div>

            <div className="form-group">
                <label>Gender</label>
                <br/>
                <input type="text" className="form-control" placeholder="Gender" />
            </div>

            <br/>

            <button type="submit" className="Accountbtn">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="/Login">Login</a> ?
            </p>
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

export default SignUp;