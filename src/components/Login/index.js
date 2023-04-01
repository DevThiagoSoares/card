import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./styles.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function validateEmail(email) {
    const re = /([0-9]{5)/;
    return re.test(email);
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email inválido");
      return;
    }

    if (!validatePassword(password)) {
      alert("Senha inválida");
      return;
    }

    // Verifica se o email e a senha estão corretos
    if (email === "12345" && password === "54321") {
      localStorage.setItem("isAuthenticated", true); // adiciona o valor de 'isAuthenticated' no localStorage
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      setIsAuthenticated(true); // atualiza o valor local de 'isAuthenticated'
    } else {
      alert("Email ou senha incorretos");
    }
  }

  console.log("asass", isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/nextpage" />;
  }
  return (
    <div className="login-container">
      {/* <h1>Login</h1> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="number"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
