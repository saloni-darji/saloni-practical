import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../services/AuthContext";   
import { FiArrowLeft, FiArrowRight, FiBell, FiSettings, FiMail, FiHome, FiInfo, FiTool, FiPhone, FiLogOut } from 'react-icons/fi';

function Sidebar() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { handleLogout } = useAuth();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className={`h-screen bg-gray-800 text-white flex flex-col sidebar fixed ${isSidebarOpen ? 'w-64 open' : 'w-20 closed'} transition-all duration-300 shadow-lg`}>
      <button 
        onClick={toggleSidebar} 
        className="p-3 focus:outline-none text-white hover:bg-gray-700 flex items-center justify-center"
      >
        {isSidebarOpen ? <FiArrowLeft size={20} /> : <FiArrowRight size={20} />}
      </button>
      
      <h2 className={`text-xl font-bold text-center py-6 tracking-wide ${isSidebarOpen ? 'block' : 'hidden'}`}>Menu</h2>
      
      <ul className="flex flex-col space-y-3 px-4">
        <li>
          <Link to="/home" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition">
            <FiHome size={20} /> <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/about" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition">
            <FiInfo size={20} /> <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>About</span>
          </Link>
        </li>
        <li>
          <Link to="/contact" className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition">
            <FiPhone size={20} /> <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Contact</span>
          </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="w-full flex items-center text-left p-3 rounded-lg hover:bg-red-600 transition">
            <FiLogOut size={20} /> <span className={`${isSidebarOpen ? 'ml-3' : 'hidden'}`}>Logout</span>
          </button>
        </li>
      </ul>
      
      <div className={`mt-auto flex ${isSidebarOpen ? 'justify-center space-x-6' : 'flex-col space-y-4'} py-6 border-t border-gray-700`}>
        <div className="relative flex justify-center">
          <button>
            <FiBell size={20} className="hover:text-gray-400 cursor-pointer" />
          </button>
        </div>
        <div className="relative flex justify-center">
          <button>
            <FiSettings size={20} className="hover:text-gray-400 cursor-pointer" />
          </button>
        </div>
        <div className="relative flex justify-center">
          <button>
            <FiMail size={20} className="hover:text-gray-400 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
