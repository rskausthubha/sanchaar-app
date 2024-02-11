import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

import ChatInterface from "../components/ChatInterface"

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [pwd, setPwd] = useState("")
    const [role, setRole] = useState("")
    const navigate = useNavigate()

    const handleLogin = async (event) => {
        try {
            const token = await axios.post('/', { username, pwd, role })

            switch (role) {
                case "student":
                    navigate("/student")
                    break
                case "parent":
                    navigate("/parent", { state: { token } })
                    break
                case "facultyMember":
                    navigate("/faculty", { state: { token } })
                    break
                case "mgmtAdmin":
                    navigate("/mgmt", { state: { token } })
            }
        } catch (err) {
            console.error(`ERROR >>> ${err}`)
        }
    }

    return (
        <div>
            <div className="form">
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
            </div>

            <ChatInterface />
        </div>
    )
}

export default LoginPage