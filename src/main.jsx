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
        element: <Home /> 
      },
      {
        path: "/searchByPC", 
        element: <SearchByPC /> 
      }, 
      {
        path: "/SearchByLocation",
        element: <SearchByLocation />
      },
      {
        path: "/SearchByPostOffice",
        element: <SearchByPostOffice />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
