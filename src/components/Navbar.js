import {Link, useNavigate} from "react-router-dom";


const Navbar = () => {

    const navigate = useNavigate()

    return (
    <nav>
        <div className="logo">
            <img src="/pictures/instagram-logo.png" width="100px" height="100px" alt="logo"/>
        </div>
        <div>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><button onClick={() => {localStorage.removeItem("token")
            navigate("/")}}>Log-Out</button></li>
            </ul>
        </div>
    </nav>
)}

export default Navbar;