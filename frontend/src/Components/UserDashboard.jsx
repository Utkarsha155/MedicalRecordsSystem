import React from 'react'
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast} from "react-toastify";

const UserDashboard = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const location = useLocation();
  const navigate = useNavigate();

   useEffect(() => {
    if (location.state?.toastMsg) {
      toast.success(location.state.toastMsg);

      navigate(location.pathname, { replace: true });
    }
  }, []);

  return (
    <>
      <div className="animate-fadeInUp">
        <div className="m-7 rounded-[32px] bg-gradient-to-r from-healthcare-primary to-healthcare-secondary shadow-glow">
          <div className="p-8 text-white flex flex-col justify-center mt-28 m-5">
            <h1 className="p-3 text-5xl font-bold flex justify-center text-center drop-shadow">Welcome {user?.userName || 'User'}!</h1>
            <p className="p-3 flex justify-center text-center opacity-90">Upload, organize, and keep track of your medical records with ease — because your health journey deserves a safe and trusted home.</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5">
        <button className="px-5 py-3 rounded-full border border-healthcare-primary/30 bg-white hover:bg-healthcare-bg font-semibold shadow-sm hover:shadow-md transition-all"><Link to="/view-reports">View Reports</Link></button>
        <button className="px-5 py-3 rounded-full bg-gradient-to-r from-healthcare-primary to-healthcare-secondary text-white font-semibold shadow-glow hover:brightness-110 transition-all"><Link to="/upload-reports">Upload Reports</Link></button>
        <button className="px-5 py-3 rounded-full border border-healthcare-primary/30 bg-white hover:bg-healthcare-bg font-semibold shadow-sm hover:shadow-md transition-all">Your Health</button>
      </div>
    </>
  )
}

export default UserDashboard
