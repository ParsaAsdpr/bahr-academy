import React, { useState, useEffect } from "react";
import articlePic from "../../assets/images/blog.png";
import ArticleCard from "../../components/Blog/ArticleCard";
import Title from "../../components/common/Title";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, translateX: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, translateX: "-100%" },
};
const RecentArticles = (props) => {
  const [articles] = useState([
    {
      title: "لورم ایپسوم متن ساخت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
      image: articlePic,
    },
    {
      title: "لورم ایپسوم متن ساخت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
      image: articlePic,
    },
    {
      title: "لورم ایپسوم متن ساخت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
      image: articlePic,
    },
    {
      title: "لورم ایپسوم متن ساخت",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
      image: articlePic,
    },
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
