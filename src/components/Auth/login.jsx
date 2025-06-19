
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/login.css";


export const Login = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
    remember: false
  });

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);
    login(); 
    alert("Logged in!");
    navigate("/"); // Navigate to Home after login
  };

  return (
    <div className="login-container">
      <h2 style={{ textAlign: "center" }}>Log in</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          name="emailOrPhone"
          placeholder="Email or Phone number"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          className="login-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="login-input"
        />

        <div className="login-row">
          <label>
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              style={{ marginRight: "6px" }}
            />
            Remember me
          </label>
          <Link to="#" style={{ color: "#6c47ff" }}>Forgot password?</Link>
        </div>

        <button type="submit" className="login-button">Login</button>
      </form>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p style={{ fontSize: "14px" }}>
          Not a member? <Link to="/signUp" style={{ color: "#6c47ff" }}>Sign up</Link>
        </p>
      </div>

      <div className="login-divider">or log in with</div>

      <div className="google-button">
        <img
          src="https://img.icons8.com/color/24/google-logo.png"
          alt="Google"
          style={{ marginRight: "10px" }}
        />
        Log in with Google
      </div>
    </div>
  );
};

export default Login;
