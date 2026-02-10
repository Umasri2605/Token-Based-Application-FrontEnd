

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    const syncAuth = () => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("storage", syncAuth);

    syncAuth();

    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userData");

    setToken(null);
    setRole(null);

    navigate("/login");
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <span className="navbar-brand mb-0 h1">MyApp</span>

      <div>

        {token ? (
          <>
            {role === "admin" && (
              <Link to="/employees" className="btn btn-outline-light me-2">
                Employees
              </Link>
            )}

            {role === "user" && (
              <Link to="/employee-details" className="btn btn-outline-light me-2">
                My Details
              </Link>
            )}

            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="btn btn-outline-light me-2">
              Home
            </Link>

            <Link to="/login" className="btn btn-outline-light me-2">
              Login
            </Link>

            <Link to="/signup" className="btn btn-primary me-2">
              Signup
            </Link>
          </>
        )}

      </div>
    </nav>
  );
}

export default Navbar;

