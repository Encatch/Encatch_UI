
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/navbar.css"

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <Link to="/" className="navbar-title">APP</Link>
      <div className="navbar-links">
        {!isAuthenticated ? (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link to="/signUp" className="navbar-link">Sign Up</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
