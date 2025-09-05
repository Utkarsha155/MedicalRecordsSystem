import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [role, setRole] = useState("user");
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...formData, role})
        });

        const data = await res.json();
        if (data.token) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);

            if (data.role === "user") navigate("/user-dashboard");
            else if (data.role === "hospital") navigate("/hospital-dashboard");
        } else {
            alert(data.message);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center animate-fadeInUp mt-24">
                <h1 className="flex justify-center bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-black font-bold text-3xl rounded-xl p-5 w-full max-w-md m-3">Login your account</h1>
                <select
    className="p-2 m-2 rounded-md"
    value={role}
    onChange={(e) => setRole(e.target.value)}
    name="role"
  >
    <option value="user">User</option>
    <option value="hospital">Hospital</option>
  </select>
                <form onSubmit={handleSubmit} className="flex flex-col rounded-md m-2 w-full max-w-md  bg-gradient-to-r from-healthcare-primary to-healthcare-muted">
                    <input className="p-2 m-2 rounded-md " type="text" placeholder="Email" name="email" onChange={handleChange} />
                    <input className="p-2 m-2 rounded-md " type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <input className="p-2 m-2 rounded-md bg-gradient-to-br from-healthcare-primary to-healthcare-secondary text-black font-bold text-2xl" type="submit" value="Login" />
                </form>
            </div>
        </>
    )
}

export default Login
