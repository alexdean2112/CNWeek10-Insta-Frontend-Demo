import React from "react";
import { useState, useEffect } from "react";
import { createUser, readUsers, updateUser, deleteUser } from "./utils/index"
import Picture from "./components/picture"

const App = () => {
useEffect(() => {
  fetchImages()
}, []) 

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [photos, setPhotos] = useState([]) 

const fetchImages = async () => {
  const response = await fetch ("https://picsum.photos/v2/list?page=2&limit=20")
  const data = await response.json()
  setPhotos(data)
}

const submitHandler = async (event) => {
  event.preventDefault()
  await createUser(username, email, password)
}

const updateHandler = async (event) => {
  event.preventDefault()
  await updateUser(username, email, password)
}

const deleteHandler = async (event) => {
  event.preventDefault()
  await deleteUser(username, email, password)
}

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <img src="/pictures/instagram-logo.png" width="300px" height="300px"/>
        </div>
        <div className="container" >
        <h1>InstaFake</h1>
        <form onSubmit = {submitHandler}>
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
            <button type='submit'>Click here to register</button>
            <button onClick={readUsers}>Read Users</button>
            <button onClick={updateHandler}>Update User</button>
            <button onClick={deleteHandler}>Delete User</button>
          </div>
        </form>
        </div>
      </div>
        <div className="mainpage">           
          {photos.map((item, index) => {
          return (
            <Picture item = {item} key = {index}/>
            )
          })}
      </div>
      <div className="footer">
        <button>Load more images</button>
      </div>
    </div>
  );
};

export default App;