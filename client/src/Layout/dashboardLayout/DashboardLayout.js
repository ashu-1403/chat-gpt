import { useAuth } from '@clerk/clerk-react';
import React, { useEffect, useState, useRef } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import ChatList from '../../components/chatList/ChatList';

const DashboardLayout = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  useEffect(() => {
    // Close menu when location changes (i.e., when a chat is selected)
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    // Function to close menu when clicking outside
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isLoaded) {
    return "Loading...";
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen bg-slate-800">
      {/* Mobile menu toggle button */}
      <button 
        className="sm:hidden bg-slate-700 text-white p-2 m-2 rounded"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* ChatList - hidden by default on mobile, toggleable */}
      <div 
        ref={menuRef}
        className={`
          ${isMobileMenuOpen ? 'block' : 'hidden'} 
          sm:block w-full sm:w-64 sm:mb- text-white
          absolute sm:relative
          bg-slate-800 sm:bg-transparent
          z-10 sm:z-auto
          h-full
          transition-all duration-300 ease-in-out
          
        `}
      >
        <ChatList />
      </div>

      {/* Main content area */}
      <div className="flex-grow overflow-auto p-4 sm:mb-12">
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout;