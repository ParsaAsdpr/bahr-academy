import React, { Component } from 'react';
import './font.css'
import { Navbar } from './components/Navbar/Navbar.jsx';
import NotFound from './Containers/404/404';
import Signup from './Containers/Signup/Signup';
import Footer from './Containers/Footer/Footer';
import Landing from './Containers/Landing/Landing';
import Articles from './Containers/Blog/Articles';
import Article from './Containers/Blog/Article';
import RecentArticles from './Containers/Landing/RecentArticles';
import Tutors from './Containers/Landing/Tutors';
import { CourseCard } from './components/Courses/CourseCard';
import Dashboard from './components/panel/Dasboard';
import Header_panel from './components/panel/Header_panel';
import Add_user from './Containers/panel/Add_user';
import Home from './Containers/panel/Home';



function App() {
  return (
    <div dir='rtl'>
      <Home></Home>
    </div>
  );
}

export default App;
