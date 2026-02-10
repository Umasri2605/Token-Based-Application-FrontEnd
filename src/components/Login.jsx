import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = user;

    if (!username || !password) {
      alert("Please Enter Both Username And Password Fields");
      return;
    }
    try {
      const res = await fetch("http://localhost:3500/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.msg === "success") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role);
        const userData = {
          username: data.user.username,
          password:data.user.password,
          role:data.user.role,
        };
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Login Success");
      if (userData.role === "admin") {
          navigate("/employees"); 
        } else {
          navigate("/employee-details");
        }
        window.location.reload();
    } else {
        alert(data.msg || "Login Failed");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    }
  };
return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "350px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-success w-100">
              Login
            </button>
            <p className="mt-3 text-center text-muted"> Don't have an account?{" "}
              <Link to="/signup" className="text-primary" style={{ textDecoration: "none" }}> Sign Up </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

