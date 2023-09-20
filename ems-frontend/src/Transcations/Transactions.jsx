// import React from 'react';
import './Transactions.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Transactions() {
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

      <main className="container mt-5">
        <h1 className="mb-4">My Transactions</h1>

        {/* Table to display transactions */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Transaction ID</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>TX12345</td>
              <td>2023-09-20</td>
              <td>$500.00</td>
              <td>Completed</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </main>

      <footer className="mt-5 text-center">
        <p>&copy; 2023 EMS254</p>
      </footer>
    </>
  );
}

export default Transactions;
