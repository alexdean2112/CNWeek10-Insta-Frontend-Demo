import React from "react";
import { useState, useEffect } from "react";
import { updateUserPassword } from "../utils/index"

const UpdatePassword = ({loggeduser, setter2, errorMsg}) => {

useEffect(() => {
    setUsername(loggeduser.username)
})

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")

const submitHandler = async (event) => {
    event.preventDefault()
    const data = await updateUserPassword(username, password, setter2)
}

return (
    <div>
        <form onSubmit={submitHandler}>
            <label> Update Password:
                <br></br>
                <input onChange={(event) => setPassword(event.target.value)} onClick={(event) => setter2("") (event.target.value = "")} />
            </label>
            <br></br>
            <div className="updatebutton">
                <button type='submit'>Update Password</button>
            </div>
        </form>
    </div>
)}

export default UpdatePassword;