import React from 'react';
import { Navbar } from '../../components/Navbar/Navbar.jsx';
import NotFound from '../../Containers/404/404';
import Signup from '../../Containers/Signup/Signup';
import Footer from '../../Containers/Footer/Footer';
import Landing from '../../Containers/Landing/Landing';
import Articles from '../../Containers/Blog/Articles';
import Article from '../../Containers/Blog/Article';
import Course from '../../Containers/Course/Course';
import {Routes, Route} from 'react-router-dom';
import Courses from '../../Containers/Course/Courses.jsx';

const UnAuthApp = () => {
        return (
            <div dir='rtl'>
              <Navbar></Navbar>
              <Routes>
          <Route path='*' element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="Articles" element={<Articles />} />
        <Route path="Article/:id" element={<Article />} />
        <Route path='Signup' element={<Signup/>}/>
        <Route path='Courses' element={<Courses/>}/>
        <Route path='Course/:id' element={<Course/>}/>
      </Routes>              <Footer></Footer>
            </div>
          );
}
 
export default UnAuthApp;