import Register from "./components/Register";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {

const [user, setUser] = useState()

  return (
    <Routes>
      <Route path="/" element={<Register setter={setUser} />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default App;