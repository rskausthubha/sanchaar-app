import { useState } from "react"
import LoginPage from "./pages/loginPage"
import StudentPage from "./pages/StudentPage"
import ParentPage from "./pages/ParentPage"
import FacultyPage from "./pages/FacultyPage"
import MgmtPage from "./pages/MgmtPage"

const App = () => {
  const [user, setUser] = useState(null)

  const setUserAfterLogin = (loggedInUser) => {
    setUser(loggedInUser)
  }

  return (
    <>
      {!user ? (
        <LoginPage setUserAfterLogin={setUserAfterLogin} />
      ) : (
        <div>
          {user.role === "student" && <StudentPage />}
          {user.role === "parent" && <ParentPage />}
          {user.role === "faculty" && <FacultyPage />}
          {user.role === "mgmt" && <MgmtPage />}
        </div>
      )}
    </>
  )
}

export default App
