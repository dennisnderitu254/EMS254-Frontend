// import React from 'react';
import './AccountSettings.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AccountSettings() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand text-white" href="/">EMS254</a>
        {/* Add navigation links if needed */}
      </nav>

      {/* Account Settings Section */}
      <div className="container mt-5">
        <h2>Account Settings</h2>
        <div className="row">
          {/* Profile Information */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Profile Information</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="John Doe" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="johndoe@example.com" />
                  </div>
                  <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
              </div>
            </div>
          </div>
          {/* Change Password */}
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Change Password</h5>
                <form>
                  <div className="mb-3">
                    <label htmlFor="currentPassword" className="form-label">Current Password</label>
                    <input type="password" className="form-control" id="currentPassword" placeholder="Enter current password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">New Password</label>
                    <input type="password" className="form-control" id="newPassword" placeholder="Enter new password" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                    <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm new password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Change Password</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-5 text-center">
        <p>&copy; 2023 EMS254</p>
      </footer>
    </div>
  );
}

export default AccountSettings;
