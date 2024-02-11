import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import LoginPage from "./pages/LoginPage.jsx"
import NotFoundPage from "./pages/NotFoundPage.jsx"
import StudentPage from "./pages/StudentPage.jsx"
import ParentPage from "./pages/ParentPage.jsx"
import FacultyPage from "./pages/FacultyPage.jsx"
import MgmtPage from "./pages/MgmtPage.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: "/student",
    element: <StudentPage />
  },
  {
    path: "/parent",
    element: <ParentPage />
  },
  {
    path: "/faculty",
    element: <FacultyPage />
  },
  {
    path: "/mgmt",
    element: <MgmtPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
