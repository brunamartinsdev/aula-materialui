import React, { useState } from "react";
import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import Login from "./pages/Login";
import AnchorTemporaryDrawer from "./components/AnchorTemporaryDrawer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para verificar o login

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Header />
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <AnchorTemporaryDrawer />
      </div>
      {isLoggedIn ? (
        <ListarTarefa />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
