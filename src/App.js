import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import SignFlip from './components/Signup/SignFlip';
import { Header } from './Containers/Header';

function App() {
  return (
    <div dir='rtl'>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
