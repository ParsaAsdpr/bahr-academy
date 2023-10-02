import React, { useState, useEffect } from "react";
import ArticleCard from "../../components/Blog/ArticleCard";
import Title from "../../components/common/Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import articles from "../../constants/articles.json"

const boxVariant = {
  visible: { opacity: 1, translateY: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, translateY: "50%" },
};
const RecentArticles = (props) => {

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
      className="my-16"
    >
      <div className="my-8">
        <Title text="آخرین مقالات"></Title>
      </div>
      <div className="px-5 mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              image={article.image}
              desc={article.desc}
              title={article.title}
            ></ArticleCard>
          );
        })}
      </div>
    </motion.section>
  );
};

export default RecentArticles;
