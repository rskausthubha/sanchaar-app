import { useState } from "react"
import LoginPage from "./pages/loginPage"
import StudentPage from "./pages/StudentPage"
import ParentPage from "./pages/ParentPage"
import FacultyPage from "./pages/FacultyPage"
import MgmtPage from "./pages/MgmtPage"

const App = () => {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)

  const doAfterLogin = (loggedInUser, userRole) => {
    setUser(loggedInUser)
    setRole(userRole)
  }

  return (
    <>
      {!user ? (
        <LoginPage doAfterLogin={doAfterLogin} />
      ) : (
        <div>
          {role === "student" && <StudentPage />}
          {role === "parent" && <ParentPage />}
          {role === "facultyMember" && <FacultyPage />}
          {role === "mgmtAdmin" && <MgmtPage />}
        </div>
      )}
    </>
  )
}

export default App
