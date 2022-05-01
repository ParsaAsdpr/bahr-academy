import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Header } from './Containers/Landing/Header';
import NotFound from './Containers/404/404';
import Signup from './Containers/Signup/Signup';
import Footer from './Containers/Footer/Footer';
import RecCourses from './Containers/Landing/RecommendedC';
import RecentArticles from './Containers/Landing/RecentArticles';
import Advantages from './Containers/Landing/Advantages';
import Tutors from './Containers/Landing/Tutors';


function App() {
  return (
    <div dir='rtl'>
      <Navbar></Navbar>
      <Advantages></Advantages>
      <RecCourses></RecCourses>
      <Tutors></Tutors>
      <RecentArticles></RecentArticles>
      <Footer></Footer>
    </div>
  );
}

export default App;
