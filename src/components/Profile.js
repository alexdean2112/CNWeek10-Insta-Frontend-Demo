import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReadUsers from "./ReadUsers"
import UpdatePassword from "./UpdatePassword";
import UpdateEmail from "./UpdateEmail";
import DeleteUser from "./DeleteUser";



const Profile = ({loggeduser, setter2, errorMsg}) => {
    
    const navigate = useNavigate()

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch( "http://localhost:5001/loginUser", {
                method: "GET",
                headers: {"Content-Type": "application/json", "Authorization": token},
            })
            const data = await response.json()
            if (data.token) {
                localStorage.setItem("token", data.token)
                navigate("/profile")
            } 
        }
        const token = localStorage.getItem("token")
        if (token) {
            getUser()
        } else {
            navigate("/")
        }
    }, [])

    return (
        <div>
            <div>
                <Navbar setter2={setter2} />
            </div>
            <div className="profilecontainer">
                <div>
                    <h1>Friends</h1>
                    <ReadUsers />
                </div>
                <div>
                    {errorMsg && (<h3>{errorMsg}</h3>)}
                    <UpdatePassword loggeduser={loggeduser} setter2={setter2} errorMsg={errorMsg}/>
                    <UpdateEmail loggeduser={loggeduser} setter2={setter2} errorMsg={errorMsg}/>
                    <DeleteUser loggeduser={loggeduser} />
                </div>
            </div>
        </div>
    )
}

export default Profile;