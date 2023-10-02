import React, { useState, useEffect } from "react";
import Title from "../../components/common/Title";
import TutorCard from "../../components/Tutors/TutorCard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../../constants/tutors.json";

const boxVariant = {
  visible: { opacity: 1, translateY: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, translateY: "50%" },
};

const Tutors = () => {


  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className=" px-5 my-12"
    >
      <Title text="مدرسین"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-4">
        {data.map((tutor, index) => {
          return (
            <TutorCard
              name={tutor.name}
              avatar={tutor.avatar}
              key={index}
              about={tutor.about}
            ></TutorCard>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Tutors;
