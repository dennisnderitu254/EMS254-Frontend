// import React from 'react';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet, Link } from 'react-router-dom';

function LoginForm() {
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        {/* <a className="navbar-brand" href="/">EMS254</a> */}
        <Link to="/" className="navbar-brand">EMS254</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/login">Log In</a>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="/register">Register</a> */}
                <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="container">
        <form method="post">
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" className="form-control" id="firstname" name="firstname" required />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" className="form-control" id="lastname" name="lastname" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" name="password" required />
          </div>

          <button type="submit" className="btn btn-primary">Log In</button>
        </form>
      </div>

      <footer className="mt-5 text-center">
        <p>&copy; 2023 EMS254</p>
      </footer>
    </div>
    <Outlet />
    </>
      );
}

export default LoginForm;
