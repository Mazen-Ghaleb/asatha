import React, { Component } from 'react';
import {useAuth} from '../contexts/AuthContext'

export default class SignUp extends Component {
  
  render() {
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <form>
            <h3>Sign Up</h3>
            <div className="form-group">
              <label>First name</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="form-group">
              <label>Last name</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <br />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <br />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Birthdate</label>
              <br />
              <input
                type="Date"
                className="form-control"
                placeholder="Birthdate"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Gender"
              />
            </div>
            <br />
            <button type="submit" className="Accountbtn">
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/Login">Login</a> ?
            </p>
          </form>
        </div>
      </div>
    );
  }
}
