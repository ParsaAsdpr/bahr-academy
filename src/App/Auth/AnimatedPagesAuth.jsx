import React from "react";
import NotFound from "../../screens/404/404";
import Signup from "../../screens/Signup/Signup";
import Landing from "../../screens/Landing/Landing";
import Articles from "../../screens/Blog/Articles";
import Article from "../../screens/Blog/Article";
import Course from "../../screens/Course/Course";
import { Routes, Route, useLocation } from "react-router-dom";
import Courses from "../../screens/Course/Courses.jsx";
import {AnimatePresence} from 'framer-motion';
import H from "../../screens/H";
import Home from "../../Containers/panel/Home";
import Add_user from "../../Containers/panel/Add_user";

const AnimatedPages = () => {
    const location = useLocation();
  return (
    <div dir="rtl">
        <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Landing />} />
        <Route path="Articles" element={<Articles />} />
        <Route path="Article/:id" element={<Article />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="SignIn" element={<Signup />} />
        <Route path="Courses" element={<Courses />} />
        <Route path="Panel" element={<Add_user />} />
        <Route path="Course/:id" element={<Course />} />
        <Route path="Test" element={<H />} />
        <Route path="dashboard" element={<Add_user />} />
      </Routes>
        </AnimatePresence>
    </div>
  );
};

export default AnimatedPages;
