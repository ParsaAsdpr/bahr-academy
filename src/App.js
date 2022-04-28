import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import SignFlip from './components/Signup/SignFlip';
import { Header } from './Containers/Header';
import NotFound from './Containers/404/404';

function App() {
  return (
    <div dir='rtl'>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
