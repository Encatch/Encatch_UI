import { useState } from "react";


const TeacherStudentForm=()=>{
    const [sessions, setSessions]=useState([]);
    const [formData, setFormData]=useState({teacher:"",student:"",subject:"",time:""});
    const [edit, setEdit]=useState(null);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(edit!==null){
            const updated=[...sessions];
            updated[edit]=formData;
            setSessions(updated);
            setEdit(null);
        }else{
            setSessions([...sessions,formData]);
        }
        setFormData({teacher:"",student:"",subject:"",time:""})
    }

    const handleEdit=(index)=>{
        setFormData(sessions[index]);
        setEdit(index);
    }

    const handleDelete=(index)=>{
        setSessions(sessions.filter((_,i)=>i!==index));
    }

    return(
        <div className="appointments-container">
            <h2>Teacher-Student Session</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
                <input name="teacher" placeholder="Teacher Name" value={formData.teacher} onChange={handleChange} required/>
                <input name="student" placeholder="Student Name" value={formData.student} onChange={handleChange} required/>
                <input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required/>
                <input type="datetime-local" name="time" value={formData.time} onChange={handleChange} required/>
                <button type="submit">{edit!==null ? "Update":"Book Session"}</button>
            </form>
            
            <div className="appointment-list">
                {sessions.length===0 ?(<p>No appointments yet.</p>):(
                    sessions.map((ele,i)=>(
                       <div key={i} className="appointment-card">
                        {ele.subject} Session Booked for {ele.student} at {ele.time}
                        <button onClick={()=>handleEdit(i)}>Edit</button>
                        <button onClick={()=>handleDelete(i)}>Delete</button>
                        </div> 
                    ))
                )}
            </div>
        
        </div>
    )
}
export default TeacherStudentForm;