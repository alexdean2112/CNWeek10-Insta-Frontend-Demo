import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {

const [loggedUser, setLoggedUser] = useState()
const [errorMsg, setErrorMsg] = useState()

  return (
    <Routes>
      <Route path="/" element={<Register setter={setLoggedUser} setter2={setErrorMsg} errorMsg={errorMsg}/>} />
      <Route path="/home" element={<Homepage setter2={setErrorMsg}/>} />
      <Route path="/profile" element={<Profile loggeduser={loggedUser} setter2={setErrorMsg} errorMsg={errorMsg}/>} />
    </Routes>
  )
}

export default App;