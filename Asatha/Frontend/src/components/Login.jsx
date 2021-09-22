import React, {useRef, useState } from 'react';
import { Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <div class="bgorund">
      <div class="text-center">
        <main class="form-signin">
          <form onSubmit={handleSubmit}>
            <h1 class="fw-normal">Login</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <div class="form-floating">
              <input type="email" ref={emailRef} required class="form-control" id="floatingInput" placeholder="Email or Username"/>
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input type="password" ref={passwordRef} required class="form-control" id="floatingPassword" placeholder="Password"/>
              <label for="floatingPassword">Password</label>
            </div>
            <div class="submitButton checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> Remember me
              </label>
            </div>
            <button  disabled={loading} class="submitButton btn btn-lg btn-primary Accountbtn" type="submit">Submit</button>
            <p className="forgot-password text-right">
            <a href="/Forgotten"> Forgot password ?</a>
            </p>
         </form>
       </main>
     </div>
    </div>
    );
  }
