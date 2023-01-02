import React from 'react'
import { useState } from 'react'

import Register from './Register'

const toRegister=()=>{
    return (<div>
        Registre
    </div>)
}
export default function Login() {
  return (
    <>
    <div id='login'>
    <div className="container">
        <div className="row justify-content-center my-3 ">
          <div className="col-4 align-self-center border border-primary rounded border-3 border-opacity-60">
    <div >
        <h1>Login</h1>
      <form>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" />
    <label className="form-label" htmlFor="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" />
    <label className="form-label" htmlFor="form2Example2">Password</label>
  </div>

  {/* <!-- 2 column grid layout for inline styling --> */}
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      {/* <!-- Checkbox --> */}
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
        <label className="form-check-label" htmlFor="form2Example34"> Remember me </label>
      </div>
    </div>

    <div className="col">
      {/* <!-- Simple link --> */}
      <a href="#!">Forgot password?</a>
    </div>
  </div>

  {/* <!-- Submit button --> */}
  <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">
    <p>Not a member? <a onClick={toRegister} >Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
  </div>
</form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>    
  )
}
