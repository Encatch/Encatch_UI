import { useState } from "react";
import DoctotPatientForm from "./DoctorPatientForm";
import TeacherStudentForm from "./TeacherStudentForm";
import RealEstateForm from "./RealEstateForm";
import "../../styles/appointment.css"

const Appointments=()=>{
  const [selected, setSelected]=useState("doctor");
  return(
    <div className="appointment-page">
      <h1>Book Appointments</h1>
      <div className="selector-container">
        <label htmlFor="type">Choose Appointment Type:</label>
        <select id="type" onChange={(e)=>setSelected(e.target.value)} value={selected}>
        <option value="doctor">Doctor / Patient</option>
        <option value="teacher">Teacher / Student</option>
        <option value="realEstate">RealEstate / Client</option>
      </select>
      </div>
      
      <div className="form-display">
        {selected==="doctor" && <DoctotPatientForm/>}
        {selected==="teacher" && <TeacherStudentForm/>}
        {selected==="realEstate" && <RealEstateForm/>}
      </div>
    </div>
  )
}
export default Appointments;
