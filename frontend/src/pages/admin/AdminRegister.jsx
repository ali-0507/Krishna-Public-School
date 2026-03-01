import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaSchool } from "react-icons/fa";
import { registerUser } from "../../services/api";
import "./adminLogin.css"; 

export default function AdminRegister() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    role: "Principal",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { name, username, password, role } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await registerUser({ name, username, password, role });

      setSuccess("User registered successfully!");
      setLoading(false);

      setTimeout(() => {
        navigate("/admin/login");
      }, 1500);

    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Registration failed."
      );
    }
  };

  return (
    <div className="admin-login-wrapper d-flex align-items-center justify-content-center">
      <div className="container text-center">

        <div className="admin-logo mt-5">
          <div className="logo-box mx-auto">
            <FaSchool size={25} />
          </div>
        </div>

        <h2 className="admin-title">Register Admin User</h2>
        <p className="admin-subtitle mb-4">Create New Admin Account</p>

        <div className="card admin-card mx-auto shadow-sm">
          <div className="card-body p-4">

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-3 text-start">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter full name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Username */}
              <div className="mb-3 text-start">
                <label className="form-label">Username</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Enter username"
                    value={username}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-3 text-start">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Role */}
              <div className="mb-4 text-start">
                <label className="form-label">Role</label>
                <select
                  name="role"
                  className="form-select"
                  value={role}
                  onChange={handleChange}
                >
                  <option value="director">Director</option>
                  <option value="principal">Principal</option>
                  <option value="managing_director">Managing Director</option>
                </select>
              </div>

              {error && (
                <div className="alert alert-danger text-start">
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success text-start">
                  {success}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-warning w-100 admin-btn"
                disabled={loading}
              >
                {loading ? "Registering..." : "Register"}
              </button>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
}