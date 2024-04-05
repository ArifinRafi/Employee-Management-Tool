import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from './pages/Dashboard.jsx';
import Employee from './pages/Employee.jsx';
import AddEmployee from './pages/AddEmployee.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard></Dashboard>
  },
  {path:'/employee',
element:<Employee></Employee>},
{path:'/addemployee',
element:<AddEmployee></AddEmployee>}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
