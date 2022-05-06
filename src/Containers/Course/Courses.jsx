import React, { useState } from "react";
import PageContainer from "../../components/common/PageContainer";
import { CourseCard } from "../../components/Courses/CourseCard";
import reactpic from "../../assets/images/react.png";


const Courses = () => {
  const [items, setItems] = useState([
    { text: "محبوب ترین ها", url: "#" },
    { text: "جدیدترین ها", url: "#" },
  ]);
  const [array, setArray] = useState(
    Array.from(Array(20).keys()).map((i) => i + 1)
  );

  return (
    <PageContainer items={items} title="دوره های آموزشی">
      {array.map((item, index) => {
        return (
          <CourseCard
          key={index}
          image={reactpic}
          desc={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه"}
          title={"دوره آموزشی React.js"}
          fc={'7789e2'}
          lc={'4f46e5'}
          ></CourseCard>
        );
      })}
    </PageContainer>
  );
};

export default Courses;
