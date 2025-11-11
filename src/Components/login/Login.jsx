import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";
import "./login.css";

const Login = () => {
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
          <h1>Acesse o sistema</h1>
          <div>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembrar de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button>Entrar</button>
          <div className="singup-link">
            <p>
              Não tem uma conta? <a href="#">Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
