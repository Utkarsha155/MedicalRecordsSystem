import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircleIcon } from "@hugeicons/core-free-icons";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

const UserNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const confirmLogout = () => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Are you sure you want to logout?</p>
          <div className="flex gap-3 justify-end">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/");
                closeToast();
              }}
              className="px-3 py-1 bg-red-500 text-white rounded-md"
            >
              Yes
            </button>
            <button
              onClick={closeToast}
              className="px-3 py-1 bg-gray-300 text-black rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false, 
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between px-5 py-2 bg-white/90 backdrop-blur-sm shadow-md border-b border-white/30 transition-all duration-500">
        <div className="flex items-center gap-3 m-3">
            <span className="hidden sm:inline-block text-lg font-extrabold tracking-tight bg-gradient-to-r from-healthcare-primary to-healthcare-secondary bg-clip-text text-transparent">HealthCare+</span>
          </div>
        <ul className="flex space-x-7 items-center px-4">
          <li className="text-base font-semibold text-gray-700 hover:text-healthcare-primary hover:font-bold">
            <Link to="/user-dashboard">User Dashboard</Link>
          </li>
          <li className="text-base font-semibold text-gray-700 hover:text-healthcare-primary hover:font-bold">
            <Link to="/view-reports">View Reports</Link>
          </li>
          <li className="text-base font-semibold text-gray-700 hover:text-healthcare-primary hover:font-bold">
            <Link to="/upload-reports">Upload Reports</Link>
          </li>
          <li className="text-base font-semibold text-gray-700">
            <div className="flex flex-col gap-3">
              <HugeiconsIcon
                icon={UserCircleIcon}
                size={28}
                color="#166534"
                strokeWidth={1.5}
                onClick={() => setOpen(!open)}
                className="hover:cursor-pointer"
              />
              {open && (
                <div className="border border-healthcare-primary shadow-healthcare-secondary shadow-md p-4 bg-healthcare-bg absolute top-20 right-5">
                  <ul>
                    <li className="font-semibold hover:cursor-pointer hover:font-bold">
                      <Link to="/your-profile">Your profile</Link>
                    </li>
                    <li
                      className="font-semibold hover:cursor-pointer hover:font-bold"
                      onClick={confirmLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserNavbar;

