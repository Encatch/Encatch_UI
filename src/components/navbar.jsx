
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css"
import { useAuth } from "../features/Auth/contexts/AuthContext";

export const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">Encatch</h1>
        {isAuthenticated && (
          <div className="navbar-links">
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </div>
        )}
      </div>
  );
};

export default Navbar;
