import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import AuthProvider from './AuthProvider/AuthProvider.jsx'


import { HelmetProvider } from 'react-helmet-async';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    
     <HelmetProvider>
<div className='max-w-[2560px] mx-auto'>
<AuthProvider>
<RouterProvider router={router}></RouterProvider>
</AuthProvider>
</div>  
</HelmetProvider>
  </React.StrictMode>,
)
