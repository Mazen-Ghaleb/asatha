import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      // <div className="auth-wrapper">
      //   <div className="auth-inner">
      //     <form>
      //       <h3>Login</h3>
      //       <div className="form-group">
      //         <label>Email address or Username</label>
      //         <br />
      //         <input
      //           type="email"
      //           className="form-control"
      //           placeholder="Email or Username"
      //         />
      //         <br />
      //       </div>
      //       <div className="form-group">
      //         <label>Password</label>
      //         <br />
      //         <input
      //           type="password"
      //           className="form-control"
      //           placeholder="Password"
      //         />
      //         <br />
      //       </div>
      //       <div className="form-group">
      //         <div className="custom-control custom-checkbox">
      //           <input
      //             type="checkbox"
      //             className="custom-control-input"
      //             id="customCheck1"
      //           />
      //           <label className="custom-control-label" htmlFor="customCheck1">
      //             {'Remember me'}
      //           </label>
      //           <br />
      //         </div>
      //       </div>
      //       <br />
      //       <button type="submit" className="Accountbtn">
      //         Submit
      //       </button>
      //       <p className="forgot-password text-right">
      //         <a href="/Forgotten"> Forgot password ?</a>
      //       </p>
      //     </form>
      //   </div>
      // </div>
      <div class="bgorund">
      <div class="text-center">
      <main class="form-signin">
      <form>
      <h1 class="fw-normal">Login</h1>
  
      <div class="form-floating">
        <input type="email" class="form-control" id="floatingInput" placeholder="Email or Username"/>
        <label for="floatingInput">Email address or Username</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
        <label for="floatingPassword">Password</label>
      </div>
  
      <div class="submitButton checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"/> Remember me
        </label>
      </div>
      <button class="submitButton btn btn-lg btn-primary Accountbtn" type="submit">Submit</button>
      <p className="forgot-password text-right">
        <a href="/Forgotten"> Forgot password ?</a>
     </p>
    </form>
    </main>
    </div>
    </div>
    );
  }
}
