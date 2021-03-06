import React, { useRef, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

var data = {
  id: '',
  FName: '',
  LName: '',
  Birthday: '',
  Gender: '',
};
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  //const passwordConfirmRef = useRef()
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function postData(Info) {
    try {
      // Create request to api service
      const request = await fetch('/api/customerInfo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },

        // format the data
        body: JSON.stringify({
          id: data.id,
          FName: data.FName,
          LName: data.LName,
          Birthday: data.Birthday,
          Gender: data.Gender,
        }),
      });

      const response = await request.json();

      // Log success message
      console.log(response);
    } catch (err) {
      console.error(`ERROR: ${err}`);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    /*if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }*/

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      postData();
      history.push('/');
    } catch {
      setError('Failed to create an account');
    }

    setLoading(false);
  }

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
          <form onSubmit={handleSubmit}>
            <h1 class="fw-normal">Sign Up</h1>
            {error && <Alert variant="danger">{error}</Alert>}

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="First Name"
                onChange={(e) => (data.FName = e.target.value)}
              />
              <label for="floatingInput">First name</label>
            </div>

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="Last Name"
                onChange={(e) => (data.LName = e.target.value)}
              />
              <label for="floatingPassword">Last Name</label>
            </div>

            <div class="form-floating">
              <input
                type="email"
                ref={emailRef}
                required
                class="form-control"
                id="floatingPassword"
                placeholder="name@example.com"
              />
              <label for="floatingPassword">Email</label>
            </div>

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="User name"
                onChange={(e) => (data.id = e.target.value)}
              />
              <label for="floatingPassword">User name</label>
            </div>

            <div class="form-floating">
              <input
                type="password"
                ref={passwordRef}
                required
                class="form-control"
                id="floatingPassword"
                placeholder="password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="form-floating">
              <input
                type="date"
                class="form-control"
                id="floatingPassword"
                placeholder="Birthdate"
                onChange={(e) => (data.Birthday = e.target.value)}
              />
              <label for="floatingPassword">Birth date</label>
            </div>

            <div class="form-floating">
              <input
                type="text"
                class="form-control"
                id="floatingPassword"
                placeholder="gender"
                onChange={(e) => (data.Gender = e.target.value)}
              />
              <label for="floatingPassword">Gender</label>
            </div>

            <button
              disabled={loading}
              class="submitButton btn btn-lg btn-primary Accountbtn"
              type="submit"
            >
              Sign Up
            </button>
            <p className="forgot-password text-right">
              Already registered <a href="/Login">Login ?</a>
            </p>
          </form>
        </main>
      </div>
    </div>
  );
}
