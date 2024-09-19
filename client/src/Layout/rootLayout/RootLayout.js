import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../../assets/images/filter_vintage_16dp_E8EAED_FILL0_wght100_GRAD0_opsz20.png'; 
import { ClerkProvider } from '@clerk/clerk-react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const FRONTEND_API = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

if (!FRONTEND_API) {
  throw new Error("Missing Frontend API Key");
}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={FRONTEND_API} afterSignOutUrl="/">
      <div className='p-5 h-screen flex flex-col'>
        <header className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt='' className="w-12 h-12" /> 
            <span className='text-white text-[14px]'> 
              ChatGemini
            </span>
          </Link>
          <div className='text-white pr-6'>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <main className='flex-1 overflow-hidden'>
          <Outlet/>
        </main>
      </div>
    </ClerkProvider>
  );
}

export default RootLayout;
