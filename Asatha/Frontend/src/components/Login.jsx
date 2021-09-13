import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Login</h3>
            <div className="form-group">
              <label>Email address or Username</label>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email or Username"
              />
              <br />
            </div>
            <div className="form-group">
              <label>Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <br />
            </div>
            <div className="form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  {'Remember me'}
                </label>
                <br />
              </div>
            </div>
            <br />
            <button type="submit" className="Accountbtn">
              Submit
            </button>
            <p className="forgot-password text-right">
              <a href="/Forgotten"> Forgot password ?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
