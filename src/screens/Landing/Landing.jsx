import React from "react";
import RecCourses from "../../components/Landing/RecommendedC";
import RecentArticles from "../../components/Landing/RecentArticles";
import Advantages from "../../components/Landing/Advantages";
import Tutors from "../../components/Landing/Tutors";
import {motion} from "framer-motion";
import LandingHeader from "../../components/Landing/Header/LandingHeader";
import AcademyStats from "../../components/Landing/AcademyStats";
import Categories from "../../components/Landing/Categories/Categories";
import H from "../../components/Landing/supportChat";

const Landing = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: .5}}>
      <LandingHeader></LandingHeader>
      <AcademyStats></AcademyStats>
      <div className="max-w-7xl mx-auto overflow-hidden">
      <Categories></Categories>
      <Advantages></Advantages>
      <RecCourses></RecCourses>
      <Tutors></Tutors>
      <RecentArticles></RecentArticles>
      </div>
      <H></H>
    </motion.div>
  );
};

export default Landing;
