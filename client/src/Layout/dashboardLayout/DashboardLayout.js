import { useAuth } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';  
import ChatList from '../../components/chatList/ChatList';

const DashboardLayout = () => {

  
  const{userId, isLoaded} = useAuth();

  const navigate = useNavigate();
  
  useEffect(() => { 
    if(isLoaded && !userId){ 
      navigate("/sign-in");
    
  }},[isLoaded, userId, navigate]);

  if(!isLoaded){
    return "Loading...";
  }

  return (
    <div className="flex">
    <div className=" text-white"><ChatList/></div>
    <div className="bg-slate-800 w-screen">
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout