import React, { Component } from "react";
import { CourseCard } from "../../components/Courses/CourseCard";
import reactpic from "../../assets/images/react.png";
import { Title } from '../../components/common/Title';

class RecCourses extends Component {
  state = {
    courses: [
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
        fc:"7789e2",
        lc: "4f46e5",
      },
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
        fc:"7789e2",
        lc: "4f46e5",
      },
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
        fc:"7789e2",
        lc: "4f46e5",
      },
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
        fc:"7789e2",
        lc: "4f46e5",
      },
    ],
  };
  render() {
    const { courses } = this.state;
    return (
      <section className="max-w-7xl mx-auto my-5">
          <Title text="دوره های پیشنهادی"></Title>
        <div className="w-full mt-5 px-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => {
            return (
              <CourseCard
                key={index}
                image={course.image}
                desc={course.desc}
                title={course.title}
                fc={course.fc}
                lc={course.lc}
              ></CourseCard>
            );
          })}
        </div>
      </section>
    );
  }
}

export default RecCourses;
