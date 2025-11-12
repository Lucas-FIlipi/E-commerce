import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { IoEye, IoEyeOff } from "react-icons/io5";
import "./signup.css";

const Signup = () => {
  const [number, setNumber] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Enviando os dados: ${email} - ${password} - ${username} - ${number}`
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: "320px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Cadastro de usuário
          </h1>

          <div className="input-box" style={{ position: "relative" }}>
            <input
              type="tel"
              placeholder="Número de celular"
              onChange={(e) => setNumber(e.target.value.replace(/\D/g, ""))}
              value={number}
              style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
            />
            <AiFillPhone
              className="icon"
              style={{
                position: "absolute",
                right: "10px",
                top: "5px",
                fontSize: "18px",
                color: "#555",
              }}
            />
          </div>

          <div className="input-box" style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Nome completo"
              onChange={(e) =>
                setUsername(e.target.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, ""))
              }
              value={username}
              style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
            />
            <FaUser
              className="icon"
              style={{
                position: "absolute",
                right: "10px",
                top: "5px",
                fontSize: "18px",
                color: "#555",
              }}
            />
          </div>

          <div className="input-box" style={{ position: "relative" }}>
            <input
              type="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
            />
            <AiOutlineMail
              className="icon"
              style={{
                position: "absolute",
                right: "10px",
                top: "5px",
                fontSize: "18px",
                color: "#555",
              }}
            />
          </div>

          <div
            className="input-box password-box"
            style={{ position: "relative" }}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ width: "100%", padding: "10px", marginBottom: "15px" }}
            />
            <FaLock
              className="icon"
              style={{
                position: "absolute",
                right: "35px",
                top: "5px",
                fontSize: "18px",
                color: "#555",
              }}
            />
            {showPassword ? (
              <IoEyeOff
                className="icon toggle-password"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "5px",
                  fontSize: "18px",
                  color: "#555",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <IoEye
                className="icon toggle-password"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "5px",
                  fontSize: "18px",
                  color: "#555",
                  cursor: "pointer",
                }}
                onClick={() => setShowPassword(true)}
              />
            )}
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
            }}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
