import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import SearchByLocation from './components/SearchByLocation.jsx'
import SearchByPC from './components/SearchByPC.jsx'
import SearchByPostOffice from './components/SearchByPostOffice.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      {
        path: "/",
        element: <Home tabName="Home" /> 
      },
      {
        path: "/searchByPC", 
        element: <SearchByPC tabName="Search By Pincode"/> 
      }, 
      {
        path: "/SearchByLocation",
        element: <SearchByLocation tabName="Search By Location"/>
      },
      {
        path: "/SearchByPostOffice",
        element: <SearchByPostOffice tabName="Search By Post Office"/>
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
