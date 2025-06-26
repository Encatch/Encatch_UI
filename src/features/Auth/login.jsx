
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useAuth } from "./contexts/AuthContext";
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
    login();
    navigate("/");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <h2>Welcome Back!</h2>
        <p>Connect and manage your account easily.</p>
        {/* You can add Lottie animation or Image here */}
        {/* <img src="/login-illustration.svg" alt="login" className="auth-image" /> */}
      </div>

      <div className="auth-right">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="emailOrPhone"
            placeholder="Email or Phone number"
            value={formData.emailOrPhone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="auth-row">
            <label>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <Link to="#">Forgot password?</Link>
          </div>

          <button type="submit">Login</button>

          <p className="auth-footer">
            Not a member? <Link to="/signUp">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;




