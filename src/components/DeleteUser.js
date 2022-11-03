import { deleteUser } from "../utils"
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DeleteUsers = ({loggeduser}) => {

    useEffect(() => {
        setUsername(loggeduser.username)
    })
    
    const [username, setUsername] = useState("")
    const navigate = useNavigate()
    
    const clickHandler = async (event) => {
        event.preventDefault()
        await deleteUser(username)
        console.log(localStorage.getItem("token"))
        localStorage.removeItem("token")
        console.log(localStorage.getItem("token"))
        navigate("/")
    }

    return (
        <div >
            <button className="deletebutton" onClick={clickHandler}>Delete Profile</button>
        </div>
    )
}

export default DeleteUsers;