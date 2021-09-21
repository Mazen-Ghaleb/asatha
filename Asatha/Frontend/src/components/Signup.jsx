import React, { Component } from 'react';

export default class SignUp extends Component {
  render() {
    return (
      // <div className="auth-wrapper">
      //   <div className="auth-inner">
      //     <form>
      //       <h3>Sign up</h3>
      //       <div className="form-group">
      //         <label>First name</label>
      //         <br />
      //         <input
      //           type="text"
      //           className="form-control"
      //           placeholder="First name"
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Last name</label>
      //         <br />
      //         <input
      //           type="text"
      //           className="form-control"
      //           placeholder="Last name"
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Email address</label>
      //         <br />
      //         <input
      //           type="email"
      //           className="form-control"
      //           placeholder="Email"
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Username</label>
      //         <br />
      //         <input
      //           type="text"
      //           className="form-control"
      //           placeholder="Username"
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Password</label>
      //         <br />
      //         <input
      //           type="password"
      //           className="form-control"
      //           placeholder="Password"
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Birthdate</label>
      //         <br />
      //         <input
      //           type="Date"
      //           className="form-control"
      //           placeholder="Birthdate"
      //         />
      //       </div>
      //       <div className="form-group">
      //         <label>Gender</label>
      //         <br />
      //         <input
      //           type="text"
      //           className="form-control"
      //           placeholder="Gender"
      //         />
      //       </div>
      //       <br />
      //       <button type="submit" className="Accountbtn">
      //         Sign Up
      //       </button>
      //       <p className="forgot-password text-right">
      //         Already registered <a href="/Login">Login</a> ?
      //       </p>
      //     </form>
      //   </div>
      // </div>
<div class="bgorund">
<div class="text-center">
    
<main class="form-signin">
  <form>
    <h1 class="fw-normal">Sign Up</h1>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingInput" placeholder="First Name"/> 
      <label for="floatingInput">First name</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" placeholder="Last Name"/>
      <label for="floatingPassword">Last Name</label>
    </div>

    <div class="form-floating">
      <input type="email" class="form-control" id="floatingPassword" placeholder="name@example.com"/>
      <label for="floatingPassword">Email</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" placeholder="User name"/>
      <label for="floatingPassword">User name</label>
    </div>

    <div class="form-floating">
      <input type="password" class="form-control" id="floatingPassword" placeholder="password"/>
      <label for="floatingPassword">password</label>
    </div>

    <div class="form-floating">
      <input type="date" class="form-control" id="floatingPassword" placeholder="Birthdate"/>
      <label for="floatingPassword">Birthdate</label>
    </div>

    <div class="form-floating">
      <input type="text" class="form-control" id="floatingPassword" placeholder="gender"/>
      <label for="floatingPassword">gender</label>
    </div>

    
    <button class="submitButton btn btn-lg btn-primary Accountbtn" type="submit">Sign in</button>
    <p className="forgot-password text-right">
      Already registered <a href="/Login">Login ?</a>
    </p>
  </form>
</main>    
</div>
</div>

    );
  }
}
