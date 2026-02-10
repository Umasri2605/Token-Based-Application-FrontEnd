import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Signup() {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });
  const navigate=useNavigate();
  const handleChange =  (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var res=await fetch("http://localhost:3500/user/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user) 
    });

    console.log(res);
    var data=await res.json();
    if(data.msg=="success"){
        alert("SignUp Success");
        navigate("/login");
    }
    else{
        alert("SignUp Failed")
    }
    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "350px" }}>
        <div className="card-body">
          <h3 className="text-center mb-4">Signup</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
