import React, { Component } from "react";
import { CourseCard } from "../../components/Courses/CourseCard";
import reactpic from "../../assets/images/react.png";

class RecCourses extends Component {
  state = {
    courses: [
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
      },
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
      },
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
      },
      {
        title: "دوره React.js",
        image: reactpic,
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای سه",
      },
    ],
  };
  render() {
    const { courses } = this.state;
    return (
      <section className="max-w-7xl mx-auto mb-5">
          <h1 className="text-xl text-slate-800 font-bold p-3 md:p-7">دوره های پیشنهادی</h1>
        <div className="w-full px-5 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => {
            return (
              <CourseCard
                key={index}
                image={course.image}
                desc={course.desc}
                title={course.title}
              ></CourseCard>
            );
          })}
        </div>
      </section>
    );
  }
}

export default RecCourses;
