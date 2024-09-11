import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/filter_vintage_16dp_E8EAED_FILL0_wght100_GRAD0_opsz20.png'; // Go two levels up to reach src

const RootLayout = () => {
  return (
    <div className='rootlayout'>
        <header>
            <Link to="/" >
            <img src={logo}  alt=''/>
            <span className='text-white'> ChatGemini </span>
            </Link>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout;