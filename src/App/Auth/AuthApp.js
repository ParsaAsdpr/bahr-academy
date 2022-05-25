import React from 'react';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Footer from '../../components/Footer/Footer';
import AnimatedPages from "./AnimatedPagesAuth.jsx";
import UserContext from '../../core/utils/UserContext.js';

const AuthApp = () => {
  const [user, setUser] = React.useState({name: "Parsa"});

    return (
      <UserContext.Provider value={user}>
      <div dir='rtl'>
        <Navbar></Navbar>
        <AnimatedPages></AnimatedPages>
        <Footer></Footer>
      </div>
      </UserContext.Provider>
      );
}
 
export default AuthApp;