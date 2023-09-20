// import React from 'react';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-custom">
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

      <main className="container mt-5">
        <section className="transaction-history">
          <h2>Transaction History</h2>
          {/* Display a list of the user's escrow transactions */}
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Transaction ID:</strong> ESC12345
              <br />
              <strong>Status:</strong> In Progress
              <br />
              <strong>Amount:</strong> $1,000.00
            </li>
            {/* Add more transaction entries as needed */}
          </ul>
        </section>

        <section className="account-details mt-5">
          <h2>Account Details</h2>
          {/* Display user account information */}
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Balance:</strong> $5,000.00</p>
          {/* Include options to update account information, change password, etc. */}
          <button className="btn btn-primary">Edit Profile</button>
          <button className="btn btn-secondary">Change Password</button>
        </section>
      </main>

      <footer className="mt-5 text-center">
        <p>&copy; 2023 EMS254</p>
      </footer>
    </>
  );
}

export default Dashboard;
