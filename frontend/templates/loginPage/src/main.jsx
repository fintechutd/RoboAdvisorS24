import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Home from './pages/Home.jsx';
import 'react-toastify/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignupPage from './pages/signupPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "pageSignup",
    element: <SignupPage/>,
  },
  {
    path: "testHome",
    element: <Home/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer></ToastContainer>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)
