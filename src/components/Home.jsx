import React from "react";
function HomePage() {
  return (
    <div className="container-fluid bg-light vh-100 overflow-hidden p-3">
      <div className="bg-white shadow-sm rounded p-3 mb-3 d-flex justify-content-between align-items-center">
        <div>
          <h4 className="fw-bold mb-1">Employee Management System</h4>
          <span className="text-muted fs-6">
            Manage employees, roles and access securely
          </span>
        </div>
        <div>
          <span className="badge bg-success fs-6 px-3 py-2">System Online</span>
        </div>
      </div>
      <div className="row h-100">
        <div className="col-md-8 h-100">
          <div className="bg-white shadow-sm rounded p-4 mb-3 h-50">
            <h5 className="fw-bold mb-3 fs-4">What you can do</h5>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h6 className="fw-bold text-primary fs-5">Employee Records</h6>
                  <p className="text-muted fs-6 mb-0">
                    Store and manage employee name, role, email and salary.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h6 className="fw-bold text-success fs-5">Role Management</h6>
                  <p className="text-muted fs-6 mb-0">
                    Control admin and user access securely.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h6 className="fw-bold text-warning fs-5">Secure Login</h6>
                  <p className="text-muted fs-6 mb-0">
                    JWT based authentication for safety.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="border rounded p-3 h-100">
                  <h6 className="fw-bold text-danger fs-5">Data Control</h6>
                  <p className="text-muted fs-6 mb-0">
                    Only authorized users can change data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-sm rounded p-4 h-50">
            <h5 className="fw-bold fs-4 mb-2">How to use</h5>
            <ul className="text-muted fs-6">
              <li>Admins manage all employees.</li>
              <li>Users can view their own profile.</li>
              <li>Use Employees page to update data.</li>
              <li>Login is required for access.</li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 h-100">
          <div className="bg-dark text-white shadow-sm rounded p-4 mb-3 h-50">
            <h5 className="fw-bold fs-4">System Status</h5>
            <hr />
            <p className="fs-6">Server : 🟢 Running</p>
            <p className="fs-6">Database : 🟢 Connected</p>
            <p className="fs-6">Security : 🔐 JWT Enabled</p>
            <p className="fs-6">Application : Active</p>
          </div>
         <div className="bg-white shadow-sm rounded p-4 h-50">
            <h5 className="fw-bold fs-4">About</h5>
            <p className="text-muted fs-6">
              This system helps organizations manage employee records, roles and
              access securely in one place.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
