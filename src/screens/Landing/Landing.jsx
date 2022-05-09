import React, { Component, Fragment } from "react";
import RecCourses from "../../components/Landing/RecommendedC";
import RecentArticles from "../../components/Landing/RecentArticles";
import Advantages from "../../components/Landing/Advantages";
import Tutors from "../../components/Landing/Tutors";
import {motion} from "framer-motion";

const Landing = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .5}}>
      <Advantages></Advantages>
      <RecCourses></RecCourses>
      <Tutors></Tutors>
      <RecentArticles></RecentArticles>
    </motion.div>
  );
};

export default Landing;
