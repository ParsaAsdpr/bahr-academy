import React from "react";
import "../font.css";
import AuthApp from "./Auth/AuthApp";
import UnAuthApp from "./UnAuth/UnAuthApp";
import LoggedContext from "../core/utils/LoggedContext";

function App() {
  const isLogged = false;

  return isLogged ? (
    <LoggedContext.Provider value={isLogged}>
      <AuthApp></AuthApp>
    </LoggedContext.Provider>
  ) : (
    <LoggedContext.Provider value={isLogged}>
      <UnAuthApp></UnAuthApp>
    </LoggedContext.Provider>
  );
}

export default App;
