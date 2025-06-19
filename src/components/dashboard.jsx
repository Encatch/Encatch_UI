import { Link } from "react-router-dom";
import "../styles/dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <h3>Menu</h3>
        <ul className="dashboard-menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/work">Work</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <h1>Hello, welcome</h1>
      </div>
    </div>
  );
};

export default Dashboard;
