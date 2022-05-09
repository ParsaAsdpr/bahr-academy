import React, { useState } from "react";
import PageContainer from "../../components/common/PageContainer";
import { CourseCard } from "../../components/Courses/CourseCard";
import { motion } from "framer-motion";
import data from "../../core/services/api/courses.api";

const Courses = () => {
  const { CoursesData } = data;
  const [items, setItems] = useState([
    { text: "محبوب ترین ها", url: "#" },
    { text: "جدیدترین ها", url: "#" },
  ]);
  const [array, setArray] = useState(
    Array.from(Array(20).keys()).map((i) => i + 1)
  );

  const [noOfElements, setnoOfElements] = useState(4);

  const sliceArray = CoursesData.slice(0, noOfElements);

  const loadMore = () => {
    setnoOfElements(noOfElements + 4);
  };
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageContainer items={items} title="دوره های آموزشی">
        {sliceArray.map((item, index) => {
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
        <button
          onClick={() => loadMore()}
          className="text-stone-600 border-stone-500 col-span-4 border-2 rounded-md py-4 hover:text-white hover:bg-stone-500 transition"
        >
          بیشتر...
        </button>
      </PageContainer>
    </motion.div>
  );
};

export default Courses;
