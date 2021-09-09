import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                <form>
                <h3>Forgtten Password</h3>

                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>

                <div className="form-group">
                    <label>Confirm Email Address</label>
                    <input type="email" className="form-control" placeholder="Confirm Email" />
                </div>

                <br/>

                <button type="submit" className="btn btn-primary btn-block">Send Reset Request</button>
                </form>
                </div> 
            </div>
        );
    }
}