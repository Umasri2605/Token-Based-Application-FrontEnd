import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import EmployeesTable from './features/employeesTable.jsx'
import HomePage from './components/Home.jsx'
import EmployeeDetails from './features/employeeProfile.jsx'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App></App>,

    children:[
      {
        path:"/employees",
        element:<EmployeesTable></EmployeesTable>
      },
      {
        path:"/",
        element:<HomePage></HomePage>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/employee-details",
        element:<EmployeeDetails></EmployeeDetails>
      }
     
    ]
  },
  
  
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
         <App />
  </RouterProvider>
)
