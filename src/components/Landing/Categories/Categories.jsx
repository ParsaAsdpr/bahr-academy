import React, { useState, useEffect } from "react";
import web from "../../../assets/images/Web.svg";
import robotic from "../../../assets/images/Robotic.svg";
import security from "../../../assets/images/Security.svg";
import ai from "../../../assets/images/AI.svg";
import Category from "./Category";
import Title from "../../common/Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, translateY: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, translateY: "50%" },
};

const Categories = (props) => {
  const [categories, setCategories] = useState([
    { title: "طراحی وبسایت", img: web },
    { title: "رباتیک", img: robotic },
    { title: "امنیت شبکه", img: security },
    { title: "هوش مصنوعی", img: ai },
  ]);

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
      className=" my-16"
    >
      <div className="my-7">
        <Title text="دسته بندی ها"></Title>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-7">
        {/* <div className='flex flex-row gap-x-10 justify-center'> */}
        {categories.map((category, index) => (
          <Category
            title={category.title}
            img={category.img}
            key={index}
          ></Category>
        ))}
      </div>
    </motion.section>
  );
};

export default Categories;
