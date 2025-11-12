import React, { useState } from "react";

const Remember = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Por favor, insira seu e-mail.");
      return;
    }
    alert(`Link de recuperação enviado para: ${email}`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Esqueceu sua senha?</h1>
      <p>Digite seu e-mail para receber o link de recuperação.</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "10px", marginBottom: "10px" }}
        />
        <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
          Enviar link
        </button>
      </form>

      <a
        href="/"
        style={{ marginTop: "15px", textDecoration: "none", color: "blue" }}
      >
        Voltar para o login
      </a>
    </div>
  );
};

export default Remember;
