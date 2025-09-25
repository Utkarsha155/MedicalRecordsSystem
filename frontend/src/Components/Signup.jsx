import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const [role, setRole] = useState("user");
    const [formData, setFormData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const endpoint = role === "user" ? "http://localhost:3000/user/signup" : "http://localhost:3000/hospital/signup";

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, role }),
            });

            const data = await res.json();

            if (data.token) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", role);
                if (data.user) {
                    localStorage.setItem("user", JSON.stringify(data.user));
                }
                if (role === "user") {
                    navigate("/user-dashboard", { state: { toastMsg: "Signup successful!" } });
                } else if (role === "hospital") {
                    navigate("/hospital-dashboard", { state: { toastMsg: "Signup successful!" } });
                }
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }

    };

    return (
        <section>
            <div className="mt-24 flex flex-col justify-center items-center animate-fadeInUp">
                <h1 className="flex justify-center bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white font-bold text-3xl rounded-xl p-5 w-full max-w-md m-3 shadow-glow">Create your account</h1>

                <h3>Please Select Your Role</h3>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="p-2 m-2 rounded-md border border-healthcare-primary/30 focus:ring-2 focus:ring-healthcare-secondary/60">
                    <option value="user">User</option>
                    <option value="hospital">Hospital</option>
                </select>


                <form onSubmit={handleSubmit} className="flex flex-col rounded-2xl m-2 w-full max-w-md bg-white shadow-lg border border-healthcare-primary/10">
                    {role === "user" && (
                        <>
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="text" placeholder="Username" name="userName" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="text" placeholder="Name" name="name" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="email" placeholder="Email" name="email" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="password" placeholder="Password" name="password" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="number" placeholder="Phone No." name="phone" onChange={handleChange} />
                            <button className="p-3 m-3 rounded-md bg-gradient-to-br from-healthcare-primary to-healthcare-secondary text-white font-semibold text-lg shadow-glow hover:brightness-110 transition-all" type="submit" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Signup"}
                            </button>
                        </>
                    )}
                    {role === "hospital" && (
                        <>
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="text" placeholder="Username" name="userName" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="text" placeholder="HospitalName" name="hospitalName" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="email" placeholder="Email" name="email" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="password" placeholder="Password" name="password" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="password" placeholder="Confirm Password" name="confirmpassword" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="number" placeholder="Phone Number" name="phone" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="text" placeholder="Address" name="address" onChange={handleChange} />
                            <input className="p-3 m-3 rounded-md border border-healthcare-primary/20 focus:outline-none focus:ring-2 focus:ring-healthcare-secondary/60" type="number" placeholder="License Number" name="licenseNumber" onChange={handleChange} />
                            <button className="p-3 m-3 rounded-md bg-gradient-to-br from-healthcare-primary to-healthcare-secondary text-white font-semibold text-lg shadow-glow hover:brightness-110 transition-all" type="submit" disabled={isLoading}>
                                {isLoading ? "Signing in..." : "Signup"}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Signup
