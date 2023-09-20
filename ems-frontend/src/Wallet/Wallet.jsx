// import React from 'react';
import './Wallet.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Wallet() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">EMS254</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/transactions">My Transactions</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/accountsettings">Account Settings</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      {/* Wallet Section */}
      <div className="container mt-5">
        <h2>Your Wallet</h2>
        <div className="row">
          {/* Balance */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Balance</h5>
                <p className="card-text">$1,000.00</p>
              </div>
            </div>
          </div>
          {/* Transactions */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Recent Transactions</h5>
                <ul className="list-group">
                  <li className="list-group-item">Received $500.00 from User A</li>
                  <li className="list-group-item">Sent $200.00 to User B</li>
                  <li className="list-group-item">Received $300.00 from User C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5 text-center">
        <p>&copy; 2023 EMS254</p>
      </footer>
    </>
  );
}

export default Wallet;
