import React, { useEffect, useState } from "react";
function EmployeeDetails() {
  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
    const fetchEmployee = async () => {
      try {

        const res = await fetch("http://localhost:3500/employees/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });
        if (res.status === 404) {
          setEmployee(null);
          return;
        }
        const data = await res.json();
        console.log(data);
        setEmployee(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEmployee();
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }
  if (!employee) {
    return (
      <h3 className="text-center mt-5 text-danger">
        Employee record not linked to this user 
      </h3>
    );
  }
  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
      <h2 className="mb-4 text-center">My Details</h2>
        <table className="table table-bordered">
          <tbody>
            <tr>
              <th>Name</th>
              <td>{employee.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <td>{employee.email}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{employee.role}</td>
            </tr>
            <tr>
              <th>Salary</th>
              <td>{employee.salary}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default EmployeeDetails;
