import React from 'react'
import {SignUp} from '@clerk/clerk-react';

const Signuppage = () => {
  return (
    <div className='text-white h-full flex items-center justify-center'><SignUp path="/sign-up"  signInUrl='sign-in'/></div>
  )
}

export default Signuppage;