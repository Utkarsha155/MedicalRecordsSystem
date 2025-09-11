import React from 'react'
import { HugeiconsIcon } from "@hugeicons/react";
import { UserCircleIcon } from "@hugeicons/core-free-icons";

const UserDashboard = () => {

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between p-2 bg-white/90  backdrop-blur-sm shadow-md border-b border-white/30 transition-all duration-500">
        <div><img src = "./../Medical.jpg" className="h-12 w-auto object-contain"/></div>
          <ul className="flex space-x-7 items-center px-4"> 
            <li className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary">Reports</li>
            <li className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary"><button>Logout</button></li>
            <li className="text-base font-semibold text-gray-700 transition-colors duration-300 hover:text-healthcare-primary">
              <HugeiconsIcon icon={UserCircleIcon} size={28} color="#417505" strokeWidth={1.5} />
            </li>
          </ul>
    </nav>
    <div className="border border-black text-black m-5">
      <div>fgfggf</div>
    </div>
    </>
  )
}

export default UserDashboard
