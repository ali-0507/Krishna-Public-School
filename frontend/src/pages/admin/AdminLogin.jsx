import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FaUser, FaLock, FaEye, FaEyeSlash, FaSchool } from "react-icons/fa";
import axios from "axios";
import "./adminLogin.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { username, password } = formData;

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

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { username, password }
      );

      // Save token
      login(res.data);
      navigate("/admin");
      // localStorage.setItem("token", res.data.token);
      // localStorage.setItem("adminRole", res.data.role);

      setLoading(false);
      navigate("/admin/dashboard");

      // Redirect based on role
      // if (res.data.role === "director") {
      //   navigate("/admin/director-dashboard");
      // } else if (res.data.role === "principal") {
      //   navigate("/admin/principal-dashboard");
      // } else {
        
      // }

    } catch (err) {
      setLoading(false);
      setError(
        err.response?.data?.message || "Login failed. Try again."
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

        <h2 className="admin-title">Krishna Public School Tendua</h2>
        <p className="admin-subtitle mb-4">Admin Panel Login</p>

        <h4 style={{ fontSize: "16px", color: "grey" }}>If not having account
          kindly <a href="/admin/register">Register yourself here.</a></h4>

        <div className="card admin-card mx-auto shadow-sm">
          <div className="card-body p-4">

            <form onSubmit={handleSubmit}>

              {/* Username */}
              <div className="mb-4 text-start">
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
              <div className="mb-4 text-start">
                <label className="form-label">Password</label>
                <div className="input-group">
                  <span className="input-group-text bg-transparent">
                    <FaLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="form-control"
                    placeholder="Enter password"
                    value={password}
                    onChange={handleChange}
                    required
                  />
                  <span
                    className="input-group-text bg-transparent password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Error */}
              {error && (
                <div className="alert alert-danger text-start">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="btn btn-warning w-100 admin-btn"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>

            </form>

            <hr className="my-4" />

            <p className="admin-note">
              Access restricted to authorized personnel only. <br />
              Contact administration for credentials.
            </p>



          </div>
        </div>

      </div>
    </div>
  );
}