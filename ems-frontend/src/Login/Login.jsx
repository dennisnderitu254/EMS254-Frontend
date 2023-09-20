// import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import {Outlet, Link } from 'react-router-dom';


function Login() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        {/* <Link to="/login" className="navbar-brand">EMS254</Link> */}
        <a className="navbar-brand" href="/">EMS254</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                {/* <Link to="/register" className="nav-link">Register</Link> */}
                <a className="nav-link" href="/register">Register</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <form method="post">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" id="username" name="username" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" id="password" required />
          </div>

          <button type="submit" className="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
    {/* <Outlet /> */}
    </>
  );
}

export default Login;
