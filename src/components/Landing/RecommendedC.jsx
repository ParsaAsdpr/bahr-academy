import React, { useState, useEffect } from "react";
import CourseCard from "../../components/Courses/CourseCard";
import reactpic from "../../assets/images/react.png";
import Title from "../../components/common/Title";
import data from "../../core/services/api/courses.api";
import Slider from "react-slick";
import settings from "../../core/utils/ResponsiveSlider";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, translateX: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, translateX: "-100%" },
};

const RecCourses = (props) => {
  const { CoursesData } = data;

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
      className=" my-14"
    >
      <div className="my-10">
        <Title text="دوره های پیشنهادی"></Title>
      </div>
      <Slider {...settings}>
        {CoursesData.map((item, index) => {
          return (
            <CourseCard
              key={index}
              image={item.img}
              id={item.id}
              desc={item.desc}
              title={item.title}
              fc={item.firstc}
              lc={item.lastc}
            ></CourseCard>
          );
        })}
      </Slider>
    </motion.section>
  );
};

export default RecCourses;
