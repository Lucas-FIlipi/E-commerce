import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/login/Login";
import Singup from "./Components/singup/Singup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Singup" element={<Singup />} />
    </Routes>
  );
};

export default App;
