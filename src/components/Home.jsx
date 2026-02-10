import React from "react";

function HomePage() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="display-4">Employee Management System</h1>
        <p className="lead">
          Manage your employees efficiently with our application
        </p>
      </header>

      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div
            className="card text-white shadow-sm"
            style={{ backgroundColor: "#ff6b6b" }} 
          >
            <div className="card-body">
              <h2 className="card-title">100</h2>
              <p className="card-text">Total Employees</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div
            className="card text-white shadow-sm"
            style={{ backgroundColor: "#ffa502" }} 
          >
            <div className="card-body">
              <h2 className="card-title">5</h2>
              <p className="card-text">Departments</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div
            className="card text-white shadow-sm"
            style={{ backgroundColor: "gray" }} 
          >
            <div className="card-body">
              <h2 className="card-title">10</h2>
              <p className="card-text">New Hires</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
