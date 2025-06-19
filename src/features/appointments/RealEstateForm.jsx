import { useState } from "react";



const RealEstateForm=()=>{
    const [bookings, setBooking]=useState([]);
    const [formData, setFormData] = useState({ agent: "", client: "", property: "", date: "" });
    const [edit, setEdit]=useState(null);

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(edit!==null){
            const updated=[...bookings];
            updated[edit]=formData;
            setBooking(updated);
            setEdit(null);
        }else{
            setBooking([...bookings, formData]);
        }
        setFormData({ agent: "", client: "", property: "", date: ""})
    }

    const handleEdit=(index)=>{
        setFormData(bookings[index]);
        setEdit(index);
    }

    const handleDelete=(index)=>{
        setBooking(bookings.filter((_,i)=>i!==index));
    };

    return(
        <div className="appointments-container">
            <h2>Real Estate Appointment</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
                <input name="agent" placeholder="Agent Name" value={formData.agent} onChange={handleChange} required />
                <input name="client" placeholder="Client Name" value={formData.client} onChange={handleChange} required />
                <input name="property" placeholder="Property Name" value={formData.property} onChange={handleChange} required />
                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                <button type="submit">{edit !== null ? "Update" : "Book"}</button>
            </form>
            <div className="appointment-list">
                <h2>Appointments</h2>
                {bookings.length===0 ? (<p>No appointments yet.</p>):(
                    bookings.map((ele,i)=>(
                        <div key={i} className="appointment-card">
                            {ele.agent} with {ele.client} at {ele.property} on {ele.date}
                            <button onClick={()=>handleEdit(i)}>Edit</button>
                            <button onClick={()=>handleDelete(i)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
export default RealEstateForm;