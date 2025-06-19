import { Link } from "react-router-dom";
import "../styles/home.css";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";
import image8 from "../assets/image8.png";
import image9 from "../assets/image9.png";
import image10 from "../assets/image10.png";
import image11 from "../assets/image11.png";
import image12 from "../assets/image12.png";
import image13 from "../assets/image13.png";
import image14 from "../assets/image14.png";
import image15 from "../assets/image15.png";
import image16 from "../assets/image16.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image19 from "../assets/image19.png";
import image20 from "../assets/image20.png";
import image21 from "../assets/image21.png";


const imageData = [
  { title: "APPOINTMENTS", url: image1, link: "/appointments" },
  { title: "RESOURCES", url: image2, link: "/page1" },
  { title: "ASSIGNMNETS", url: image3, link: "/page1" },
  { title: "DAY CARE", url: image4, link: "/page1" },
  { title: "PRODUCTS", url: image5, link: "/page1" },
  { title: "FEES", url: image6, link: "/page1" },
  { title: "ONLINE CLASSES", url: image7, link: "/page1" },
  { title: "CIRCULARS", url: image8, link: "/page1" },
  { title: "NOTIFICATIONS", url: image9, link: "/page1" },
  { title: "ATTENDENCE", url: image10, link: "/page1" },
  { title: "CALENDAR", url: image11, link: "/page1" },
  { title: "HOMEWORK", url: image12, link: "/page1" },
  { title: "SHOWCASE", url: image13, link: "/page1" },
  { title: "ONLINE EXAMS", url: image14, link: "/page1" },
  { title: "TIME TABLE", url: image15, link: "/page1" },
  { title: "PROGRESS REPORT", url: image16, link: "/page1" },
  { title: "EXAM TIMETABLE", url: image17, link: "/page1" },
  { title: "SUPPORT", url: image18, link: "/page1" },
  { title: "SETTINGS", url: image19, link: "/page1" },
  { title: "DIGITAL CONTENT", url: image20, link: "/page1" },
  { title: "PROFILE", url: image21, link: "/page1" },
];

const Home = () => {
  return (
    <div className="home-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>My Apps</h3>
        <ul className="menu">
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/add_section">Add Section</Link></li>
        </ul>
      </div>

      <div className="grid">
        {imageData.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <img src={item.url} alt={item.title} />
              <h4>{item.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
