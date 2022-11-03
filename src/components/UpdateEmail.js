import React from "react";
import { useState, useEffect } from "react";
import { updateUserEmail } from "../utils/index"

const UpdateEmail = ({loggeduser, setter2}) => {

useEffect(() => {
    setUsername(loggeduser.username)
})

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")

const submitHandler = async (event) => {
    event.preventDefault()
    await updateUserEmail(username, email, setter2)
}

return (
    <div>
        <form onSubmit={submitHandler}>
            <label> Update email:
                <br></br>
                <input className="updateinput" onChange={(event) => setEmail(event.target.value)} onClick={(event) => setter2("") (event.target.value = "")} />
            </label>
            <br></br>
            <div>
                <button type='submit' className="updatebutton">Update Email</button>
            </div>
        </form>
    </div>
)}

export default UpdateEmail;