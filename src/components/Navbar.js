import {Link, useNavigate} from "react-router-dom";


const Navbar = ({setter2}) => {

    const navigate = useNavigate()

    return (
    <nav>
        <div className="logo">
            <img src="/pictures/instagram-logo.png" width="100px" height="100px" alt="logo"onClick={() => {navigate("/home")}}/>
        </div>
        <div className="navlinks">
            <ul>
                <li><Link to="/home"><button>Home</button></Link></li>
                <li><Link to="/profile"><button>Profile</button></Link></li>
                <li><button onClick={() => {localStorage.removeItem("token")
                                            setter2("")
                                            navigate("/")}}>Log-Out</button></li>
            </ul>
        </div>
    </nav>
)}

export default Navbar;