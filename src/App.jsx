import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Signup from "./Components/signup/signup";
import Remember from "./Components/remember/Remember";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Remember" element={<Remember />} />
    </Routes>
  );
};

export default App;
