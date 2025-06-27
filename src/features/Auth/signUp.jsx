import { useState } from "react";
import "../../styles/login.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("You must agree to the terms.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Form submitted:", formData);
    alert("Sign Up Successful!");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-left">
        <h2>Join Us!</h2>
        <p>Sign up to access all features of the platform.</p>
        {/* <img src="/signup-illustration.svg" alt="signup" className="auth-image" /> */}
      </div>

      <div className="auth-right">
        <h2>Register</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="text"
            name="name"
            placeholder="Full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <label style={{ fontSize: "14px" }}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              style={{ marginRight: "8px" }}
            />
            I agree to all Terms, Privacy Policy, and Fees
          </label>

          <button type="submit">Sign Up</button>

          <p className="auth-footer">
            Already have an account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;





