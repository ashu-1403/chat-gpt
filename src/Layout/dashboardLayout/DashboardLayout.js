import React from 'react'
import { Outlet } from 'react-router-dom';  

const DashboardLayout = () => {
  return (
    <div className="dashboardLayout">
    <div className="menu text-white">MENU</div>
    <div className="content">
        <Outlet/>
        </div>
    </div>
  )
}

export default DashboardLayout