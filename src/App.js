import React, { useState } from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import Cadastro from "./components/Cadastro";
import Card from "./components/Cards";
import Login from "./components/Login";

function checkUserAuthentication() {
  try {
    const email = localStorage.getItem("email");

    if (email) {
      // Verifica se o usuário está autenticado.
      // Neste exemplo, estou assumindo que o usuário está autenticado se houver um registro válido no armazenamento local.
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log("O email armazenado não é válido.");
  }
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleLogin(email, password) {
    // Verifica se o email e a senha estão corretos
    if (email === "12345" && password === "54321") {
      setIsAuthenticated(true);
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(password));
    } else {
      alert("Email ou senha incorretos");
    }
  }

  function handleLogout() {
    setIsAuthenticated(false);
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }

  function PrivateRoute({ component: Component, ...rest }) {
    const isAuthenticated = checkUserAuthentication();
    return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login handleLogin={handleLogin} />} />
        <Route element={<PrivateRoute component={Card} />} path="/nextpage" />

        <Route path="/logout" element={<Navigate to="/" />} />
      </Routes>

      {isAuthenticated && (
        <div>
          <button onClick={handleLogout}>Sair</button>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
