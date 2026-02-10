import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function EmployeeTable() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    _id: "",
    name: "",
    email: "",
    role: "",
    salary: ""
  });

  const token = localStorage.getItem("token");
  const fetchEmployees = async () => {
    try {
      const res = await fetch("http://localhost:3500/employees", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      setEmployees(data);
    } catch (err) {
      console.error("Error fetching employees:", err);
      toast.error("Error fetching employees!");
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "salary" ? Number(value) : value
    });
  };

  const submitEmployee = async () => {
    try {
      if (!form.name || !form.email || !form.role || !form.salary) {
        toast.error("Please fill all fields!");
        return;
      }
      if (form._id) {
        await fetch(`http://localhost:3500/employees/${form._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(form)
        });
        toast.success("Employee updated successfully!");
      } else {
        await fetch("http://localhost:3500/employees/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`   
          },
          body: JSON.stringify(form)
        });
        toast.success("Employee added successfully!");
      }

      setForm({ _id: "", name: "", email: "", role: "", salary: "" });
      fetchEmployees();

    } catch (err) {
      console.error(err);
      toast.error("Operation failed!");
    }
  };

  const editEmployee = (emp) => {
    setForm(emp);
  };

  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you sure you want to delete this employee?")) return;

    try {
      const res = await fetch(`http://localhost:3500/employees/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (res.ok) {
        toast.success("Employee deleted successfully!");
        fetchEmployees();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete employee!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Employee Management</h2>
      <div className="card p-4 mb-4 shadow-sm">
        <div className="row g-3">
          <div className="col-md-3">
            <input
              className="form-control"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-3">
            <input
              className="form-control"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              name="role"
              placeholder="Role"
              value={form.role}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <input
              className="form-control"
              name="salary"
              type="number"
              placeholder="Salary"
              value={form.salary}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <button
              className={`btn ${form._id ? "btn-warning" : "btn-primary"} w-100`}
              onClick={submitEmployee}
            >
              {form._id ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </div>

      <div className="card p-3 shadow-sm">
        <table className="table table-bordered table-striped mb-0">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">No Employees Found</td>
              </tr>
            ) : (
              employees.map((emp) => (
                <tr key={emp._id}>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.role}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => editEmployee(emp)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteEmployee(emp._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeTable;


