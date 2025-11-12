import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { IoEye, IoEyeOff } from "react-icons/io5"; 
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Enviando os dados: " + username + " - " + password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          width: "350px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <h1
            style={{ textAlign: "center", marginBottom: "25px", color: "#333" }}
          >
            Acesse o sistema
          </h1>

          <div style={{ position: "relative", marginBottom: "20px" }}>
            <input
              type="email"
              placeholder="E-mail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 40px 8px 12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
            <FaUser
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            />
          </div>

          <div style={{ position: "relative", marginBottom: "15px" }}>
            <input
              type={showPassword ? "text" : "password"} 
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "8px 40px 8px 12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
            <FaLock
              style={{
                position: "absolute",
                right: "40px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#888",
              }}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#888",
                padding: 0,
              }}
            >
              {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              fontSize: "14px",
            }}
          >
            <label
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <input type="checkbox" />
              Lembrar de mim
            </label>
            <a
              href="/Remember"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Esqueceu a senha?
            </a>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              marginBottom: "15px",
            }}
          >
            Entrar
          </button>

          <p style={{ textAlign: "center", fontSize: "14px" }}>
            Não tem uma conta?{" "}
            <a
              href="/Signup"
              style={{ color: "#007bff", textDecoration: "none" }}
            >
              Registrar
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
