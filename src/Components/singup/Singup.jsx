import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./singup.css";

const Singup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Enviando os dados:" + username + " - " + password); //return dos dados de login
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Cadastro de usuario</h1>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.vale)}
            />
            <FaUser className="icon" />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div>
            <button>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Singup;
