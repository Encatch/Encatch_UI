import { useState } from "react";


const DoctotPatientForm=()=>{
    const [appointments, setAppointments]=useState([]);
    const [formData, setFormData]=useState({doctor:"", patient:"", date:"",time:""});
    const [edit, setEdit]=useState(null);

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(edit!==null){
            const updated=[...appointments];
            updated[edit]=formData;
            setAppointments(updated);
            setEdit(null);
        }else{
            setAppointments([...appointments, formData]);
        }
        setFormData({doctor:"", patient:"", date:"",time:""})
    };

    const handleEdit=(index)=>{
        setFormData(appointments[index])
        setEdit(index);
    };

    const handleDelete=(index)=>{
        setAppointments(appointments.filter((_,i)=>i !== index));
    }

    return(
        <div className="appointments-container">
            <h2>Doctor-Patient Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
                <input type="text" name="doctor" placeholder="Doctor Name" value={formData.doctor} onChange={handleChange} required/>
                <input name="patient" placeholder="Patient Name" value={formData.patient} onChange={handleChange} required/>
                <input type="date" name="date" value={formData.date} onChange={handleChange} required/>
                <input type="time" name="time" value={formData.time} onChange={handleChange} required/>
                <button type="submit">{edit !== null ? "Update":"Book Appointment"}</button>
            </form>

            <div className="appointment-list">
                <h2>Appointments</h2>
                {appointments.length===0 ? (<p>No appointments yet.</p>):(
                appointments.map((ele, i)=>(
                    <div key={i} className="appointment-card">
                        Appointment Booked Dr.{ele.doctor} with {ele.patient} at {ele.date} {ele.time}
                        <button onClick={()=>handleEdit(i)}>Edit</button>
                        <button onClick={()=>handleDelete(i)}>Delete</button>
                    </div>
                ))
                )}
            </div>
        </div>
    )
}
export default DoctotPatientForm;