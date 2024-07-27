import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';
import SearchByPC from './components/SearchByPC.jsx'
import Home from './components/home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    children: [
      {
        path: "home",
        element: <Home /> 
      },
      {
        path: "searchByPC", 
        element: <SearchByPC /> 
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
