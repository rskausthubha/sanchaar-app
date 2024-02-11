import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div>
            <span>404 Non Found</span>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NotFoundPage