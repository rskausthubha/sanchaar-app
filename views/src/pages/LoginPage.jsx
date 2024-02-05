import { useState } from "react"
import axios from 'axios'

const LoginPage = ({ doAfterLogin }) => {
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")
    const [role, setRole] = useState("")

    const handleLogin = async (event) => {
        try {
            let user = await axios.post('/', { username, pwd, role })

            doAfterLogin(user, role)
        } catch (err) {
            console.error(`ERROR >> ${err}`)
        }
    }

    return (
        <form>
            <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(event) => { setUsername(event.target.value) }}
                required
            />
            <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={pwd}
                onChange={(event) => { setPwd(event.target.value) }}
                required
            />
            <select
                name="role"
                id="role"
                onChange={(event) => { setRole(event.target.value) }}
                required
            >
                <option value="">---- Choose option ----</option>
                <option value="student">Student</option>
                <option value="parent">Parent</option>
                <option value="facultyMember">Faculty</option>
                <option value="mgmtAdmin">Management</option>
            </select>
            <input type="button" value="Submit" onClick={handleLogin} />
        </form>
    )
}

export default LoginPage