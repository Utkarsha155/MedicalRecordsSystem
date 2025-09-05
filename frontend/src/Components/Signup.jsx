import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

const Signup = () => {
    const [role, setRole] = useState("user");
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...formData, role}),
        });

        const data = await res.json();

        if (data.success) {
  localStorage.setItem("token", data.token);
  localStorage.setItem("role", data.role);

  if (role === "user") {
    navigate("/user-dashboard");
  } else if (role === "hospital") {
    navigate("/hospital-dashboard");
  }
}

    };

    return (
        <section>
            <div className="mt-24 flex flex-col justify-center items-center animate-fadeInUp">
                <h1 className="flex justify-center bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-black font-bold text-3xl rounded-xl p-5 w-full max-w-md m-3">Create your account</h1>

                <h3>Please Select Your Role</h3>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="hospital">Hospital</option>
                </select>


                <form onSubmit={handleSubmit} className="flex flex-col rounded-md m-2 w-full max-w-md  bg-gradient-to-r from-healthcare-primary to-healthcare-muted">
                    {role === "user" && (
                        <>
                            <input className="p-2 m-2 rounded-md " type="text" placeholder="Username" name="username" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="text" placeholder="Name" name="name" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="email" placeholder="Email" name="email" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="password" placeholder="Password" name="password" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="number" placeholder="Phone No." name="phone" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md bg-gradient-to-br from-healthcare-primary to-healthcare-secondary text-black font-bold text-2xl" type="submit" value="Signup" />
                        </>
                    )}
                    {role === "hospital" && (
                        <>
                        <input className="p-2 m-2 rounded-md " type="text" placeholder="Username" name="username" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="text" placeholder="HospitalName" name="hospitalName" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="email" placeholder="Email" name="email" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="password" placeholder="Password" name="password" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="number" placeholder="Phone Number" name="phone" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="text" placeholder="Address" name="address" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md " type="number" placeholder="License Number" name="licenseNumber" onChange={handleChange} />
                            <input className="p-2 m-2 rounded-md bg-gradient-to-br from-healthcare-primary to-healthcare-secondary text-black font-bold text-2xl" type="submit" value="Signup" />
                        </>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Signup
