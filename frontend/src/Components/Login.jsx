import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [role, setRole] = useState("user");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const endpoint = role === "user" ? "http://localhost:3000/user/login" : "http://localhost:3000/hospital/login";

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, role })
            });

            const data = await res.json();
            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", role);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                }

                setTimeout(() => {
                    if (role === "user") navigate("/user-dashboard" , { state: { toastMsg: "Login successful!" } });
                    else if (role === "hospital") navigate("/hospital-dashboard",  { state: { toastMsg: "Login successful!" } });
                }, 1000); 
            }

        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center animate-fadeInUp mt-24">
                <h1 className="flex justify-center bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white font-bold text-3xl rounded-xl p-5 w-full max-w-md m-3 shadow-glow">Login your account</h1>
                <select
                    className="p-2 m-2 rounded-md border border-healthcare-primary/30 focus:ring-2 focus:ring-healthcare-secondary/60"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    name="role"
                >
                    <option value="user">User</option>
                    <option value="hospital">Hospital</option>
                </select>
                <form onSubmit={handleSubmit} className="flex flex-col rounded-2xl m-2 w-full max-w-md bg-white shadow-lg border border-healthcare-primary/10">
                    <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="text" placeholder="Email" name="email" onChange={handleChange} />
                    <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="password" placeholder="Password" name="password" onChange={handleChange} />
                    <button className="p-3 m-3 rounded-md bg-gradient-to-br from-healthcare-primary to-healthcare-secondary text-white font-semibold text-lg shadow-glow hover:brightness-110 transition-all" type="submit" disabled={isLoading}>{isLoading ? "Logging in..." : "Login"}</button>
                </form>
            </div>
        </>
    )
}

export default Login
