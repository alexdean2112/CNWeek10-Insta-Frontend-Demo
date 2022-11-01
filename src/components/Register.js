import React from "react";
import { useState, useEffect } from "react";
import { createUser, loginUser } from "../utils/index"
import { useNavigate } from "react-router-dom";

const Register = ({setter}) => {

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
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
            navigate("/home")
        } 
    }
    const token = localStorage.getItem("token")
    if (token) {
        getUser()
    } else {
        navigate("/")
    }
}, [])

const submitHandler = async (event) => {
    event.preventDefault()
    const user = await createUser(username, email, password, setter)

    if (user.token) {
        localStorage.setItem("token", user.token)
        navigate("/home")
    }
}

const loginHandler = async (event) => {
    event.preventDefault()
    const user = await loginUser(username, email, password, setter)
    if (user.token) {
        localStorage.setItem("token", user.token)
        navigate("/home")
    }
}

return (
    <div>
        <div className="nav">
            <div className="logo">
                <img src="/pictures/instagram-logo.png" width="300px" height="300px" alt="logo"/>
            </div>
            <div className="container" >
                <h1>InstaFake</h1>
                <form onSubmit={submitHandler}>
                    <label> Username:
                        <br></br>
                        <input onChange={(event) => setUsername(event.target.value)} />
                    </label>
                    <br></br>
                    <br></br>

                    <label> Email:
                        <br></br>
                        <input onChange={(event) => setEmail(event.target.value)} />
                    </label>
                    <br></br>
                    <br></br>

                    <label> Password:
                        <br></br>
                        <input onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <br></br>
                    <br></br>
                    <div>
                        <button type='submit'>Create User</button>
                        <button onClick={loginHandler}>Log-In</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)}

export default Register;