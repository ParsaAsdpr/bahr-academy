import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';

function App() {
  return (
    <div className="bg-red-100 h-screen w-full font-irsans" dir='rtl'>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
