import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import SignFlip from './components/Signup/SignFlip';
import { Header } from './Containers/Header';
import NotFound from './Containers/404/404';
import Signup from './Containers/Signup/Signup';

function App() {
  return (
    <div dir='rtl'>
      <Navbar></Navbar>
      <Signup></Signup>
    </div>
  );
}

export default App;
