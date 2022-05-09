import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import NotFound from './Containers/404/404';
import Signup from './Containers/Signup/Signup';
import Footer from './Containers/Footer/Footer';
import Landing from './Containers/Landing/Landing';
import Articles from './Containers/Blog/Articles';
import Article from './Containers/Blog/Article';
import Course from './Containers/Course/Course';


function App() {
  return (
    <div dir='rtl'>
      <Navbar></Navbar>
      <Course></Course>
      <Footer></Footer>
    </div>
  );
}

export default App;
