import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './routes/Homepage/Homepage';
import Dashboardpage from './routes/dashboardpage/Dashboardpage';
import Chatpage from './routes/chatpage/Chatpage';
import RootLayout from './Layout/rootLayout/RootLayout';
import DashboardLayout from './Layout/dashboardLayout/DashboardLayout';
import Signinpage from './routes/signinpage/SIgninpage';
import Signuppage from './routes/signupage/Signuppage';
const router = createBrowserRouter([
  {
   element:<RootLayout/>,
   children:[
     {
       path: '/',
       element: <Homepage /> 
      },
      {
        path: 'sign-in/*',
        element: <Signinpage/> 
       },
       {
        path: 'sign-up/*',
        element: <Signuppage/>
       },
     {
      element:<DashboardLayout/>,
      children:[
        {
          path:'/dashboard',
          element:<Dashboardpage/>
        },
        {
          path:"/dashboard/chats/:id",
         element:<Chatpage/> 
        } 
      ]
    }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
