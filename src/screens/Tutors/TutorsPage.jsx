import React from "react";
import { motion } from "framer-motion";
import data from "../../constants/tutors.json";
import TutorCard from "../../components/Tutors/TutorCard";

const TutorsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mx-auto max-w-7xl mt-20 text-center"
    >
        <h1 className=" text-xl md:text-2xl lg:text-3xl bg-white px-7 text-stone-600 font-bold inline top-6 relative">درباره اکادمی بحر</h1>
              <div className="border-t border-stone-400 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-10 pt-4 px-8">
      {data.map((tutor, index) => (
        <TutorCard
        name={tutor.name}
        avatar={tutor.avatar}
        key={index}
        about={tutor.about}
        ></TutorCard>
        ))}
        </div>
    </motion.div>
  );
};

export default TutorsPage;
