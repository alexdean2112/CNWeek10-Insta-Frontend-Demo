import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Profile = () => {

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
            <Navbar />

        </div>
    )
}

export default Profile;