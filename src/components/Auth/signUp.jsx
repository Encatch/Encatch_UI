import { useState } from "react";
import "../../styles/signUp.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
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
    <div className="signup-container">
      <h2 style={{ textAlign: "center" }}>Sign up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          name="name"
          placeholder="Full name"
          value={formData.name}
          onChange={handleChange}
          required
          className="signup-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          required
          className="signup-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="signup-input"
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="signup-input"
        />

        <label style={{ fontSize: "14px" }}>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            style={{ marginRight: "8px" }}
          />
          I agree to all Term, Privacy Policy and Fees
        </label>

        <button type="submit" className="signup-button">Sign up</button>
      </form>

      <div className="signup-divider">
        <span>Or sign up with</span>
      </div>

      <div className="social-icons">
        <SocialIcon src="https://img.icons8.com/color/48/google-logo.png" alt="Google" />
        <SocialIcon src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" />
        <SocialIcon src="https://img.icons8.com/ios-filled/48/000000/twitterx.png" alt="X" />
      </div>
    </div>
  );
};

const SocialIcon = ({ src, alt }) => (
  <img src={src} alt={alt} className="social-icon" />
);

export default SignUp;
