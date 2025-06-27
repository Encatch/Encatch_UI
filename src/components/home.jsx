import { Link } from "react-router-dom";
import "../styles/home.css";

import image1 from "../assets/logoimages/Apontments.png";
import image2 from "../assets/logoimages/resources.png";
import image3 from "../assets/logoimages/assignments.png";
import image4 from "../assets/logoimages/daycare.png";
// import image5 from "../assets/logoimages/products.png";
import image6 from "../assets/logoimages/fees.png";
// import image7 from "../assets/logoimages/onlinecls.png";
import image8 from "../assets/logoimages/circular.png";
// import image9 from "../assets/logoimages/notifecations.png";
// import image10 from "../assets/logoimages/Attendence.png";
import image11 from "../assets/logoimages/calender.png";
import image12 from "../assets/logoimages/homework.png";
// import image13 from "../assets/logoimages/showcase.png";
// import image14 from "../assets/logoimages/online exams.png";
// import image15 from "../assets/logoimages/timetable.jpg";
// import image16 from "../assets/logoimages/progress report.png";
// import image17 from "../assets/logoimages/examtimetable.png";
// import image18 from "../assets/logoimages/support.png";
// import image19 from "../assets/logoimages/settings.png";
// import image20 from "../assets/logoimages/degital content.png";
// import image21 from "../assets/logoimages/profile.jpg";
import Navbar from "./navbar";

const imageData = [
  { title: "Appointments", url: image1, link: "/appointments" },
  { title: "Resources", url: image2, link: "/resources" },
  { title: "Day Care", url: image4, link: "/activities" },
  { title: "Assignments", url: image3, link: "/classes" },
  // { title: "Products", url: image5, link: "/page1" },
  { title: "Fees", url: image6, link: "/fees" },
  // { title: "Online Classes", url: image7, link: "/page1" },
  { title: "Circulars", url: image8, link: "/Circulars" },
  // { title: "Notifications", url: image9, link: "/page1" },
  // { title: "Attendance", url: image10, link: "/page1" },
  { title: "Calendar", url: image11, link: "/Calendar" },
  { title: "Homework", url: image12, link: "/Homework" },
  // { title: "Showcase", url: image13, link: "/page1" },
  // { title: "Online Exams", url: image14, link: "/page1" },
  // { title: "Time Table", url: image15, link: "/page1" },
  // { title: "Progress Report", url: image16, link: "/page1" },
  // { title: "Exam Timetable", url: image17, link: "/page1" },
  // { title: "Support", url: image18, link: "/page1" },
  // { title: "Settings", url: image19, link: "/page1" },
  // { title: "Digital Content", url: image20, link: "/page1" },
  // { title: "Profile", url: image21, link: "/page1" },
];

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home-container">
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
  
    </>

  );
};

export default Home;
