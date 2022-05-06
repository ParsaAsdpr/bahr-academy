import React from 'react';
import '../font.css'
import AuthApp from './Auth/AuthApp';
import UnAuthApp from './UnAuth/UnAuthApp';


function App() {
  const isLogged = false;
  
  return isLogged ? <AuthApp></AuthApp> : <UnAuthApp></UnAuthApp> 

}

export default App;
