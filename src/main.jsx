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
import Category from './pages/Category.jsx';
import Login from './pages/Login.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard></Dashboard>
  },
  {path:'/employee',
element:<Employee></Employee>},
{path:'/addemployee',
element:<AddEmployee></AddEmployee>},
{
  path:'/category',
  element:<Category></Category>
},
{
  path:'/login',
  element:<Login></Login>
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
