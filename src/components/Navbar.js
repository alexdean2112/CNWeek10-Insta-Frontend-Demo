import {Link, useNavigate} from "react-router-dom";


const Navbar = ({setter2}) => {

    const navigate = useNavigate()

    const logoutHandler = () => {
        localStorage.removeItem("token")
        setter2("")
        navigate("/")
    }

    return (
    <nav>
        <div className="logo">
            <img src="/pictures/instagram-logo.png" width="100px" height="100px" alt="logo"onClick={() => {navigate("/home")}}/>
        </div>
        <div className="navlinks">
            <ul>
                <li><Link to="/home"><button className="formbutton">Home</button></Link></li>
                <li><Link to="/profile"><button className="formbutton">Profile</button></Link></li>
                <li><button className="formbutton" onClick={logoutHandler}>Log-Out</button></li>
            </ul>
        </div>
    </nav>
)}

export default Navbar;