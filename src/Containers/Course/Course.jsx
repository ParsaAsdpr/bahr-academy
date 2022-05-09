import React, { Component } from "react";
import { Like } from "../../components/common/Like";
import { Title } from "../../components/common/Title";
import { Dislike } from "../../components/common/Dislike";
import { Comment } from "../../components/common/Comment";
import Share from "../../components/common/Share";
import CourseInfo from "../../components/Courses/StatsNInfo";
import Main from "../../components/Courses/Main";
import CourseTutor from "../../components/Courses/CourseTutor";
import VideoListItem from "../../components/Courses/VideoListItem";

class Course extends Component {
  state = {
    course: {
      title: "جاوا اسکریپت مقدماتی",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی \n \n مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحانرایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائهراهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای \n \n \nاصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفادهقرار گیرد.",
      price: "350000",
      students: "1124",
      duration: "18:23",
      videos: [{title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
      {title: "معرفی دوره", duration: "12:34"},
    ],
      tags: ["برنامه نویسی", "جاوااسکریپت", "طراحی سایت", "javascript", "js"],
      comments: [
        {
          name: "پارسا",
          text: "👌",
          image:
            "https://i.pinimg.com/474x/dc/33/26/dc33269f24cbc2cf0fe3ecc27024e436.jpg",
        },
        {
          name: "ممد",
          text: "عالی بود",
          image: "https://pbs.twimg.com/media/FCQddC_WYAEzxfA.jpg:large",
        },
        {
          name: "امین",
          text: ":)",
          image:
            "https://static.wikia.nocookie.net/af527d64-10e5-47dc-84c9-3691fa1cb744/scale-to-width/370",
        },
      ],
    },
  };
  render() {
    const price = parseInt(this.state.course.price).toLocaleString();
    const students = parseInt(this.state.course.students).toLocaleString();
    const hour = this.state.course.duration.split(":")[0];
    const min = this.state.course.duration.split(":")[1];
    const { tags, comments, desc, title, videos } = this.state.course;
    return (
      <section className="max-w-7xl mx-auto p-0 md:p-7 overflow-hidden">
        <div className="md:grid md:grid-cols-3 gap-x-8">
          <div className="grid grid-cols-1 gap-5 col-span-2">
            <div
              className="p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <Main title={title} tags={tags} desc={desc}></Main>
            </div>
            <div
              className="p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <div className="mb-5">
                <Title text="نظرات"></Title>
              </div>

              <div className="w-full">
                <textarea
                  className="border w-full h-36 p-4 text-xs text-stone-600 border-stone-400 rounded-md"
                  placeholder="نظر خود را بنویسید"
                  style={{ resize: "none" }}
                ></textarea>
                <button className="py-3 bg-indigo-400 text-white w-full text-center rounded-md text-sm hover:bg-indigo-500 transition-colors">
                  ثبت نظر
                </button>
              </div>
              {comments.map((comment, index) => {
                return (
                  <Comment
                    key={index}
                    name={comment.name}
                    text={comment.text}
                    avatar={comment.image}
                  ></Comment>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 mt-5 md:mt-0 auto-rows-min gap-5">
            <div
              className="px-16 py-7 md:p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <div className="mb-5">
                <Title text="تاریخ شروع دوره"></Title>
              </div>
              <CourseInfo
                price={price}
                students={students}
                hour={hour}
                min={min}
              ></CourseInfo>
            </div>

            <div
              className="px-16 py-7 md:p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <Share></Share>
            </div>

            <div
              className="px-16 py-7 md:p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <Title text="مدرس این دوره"></Title>
              <CourseTutor></CourseTutor>
            </div>

            <div
              className="px-16 py-7 md:p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <Title text="فهرست ویدیو ها"></Title>
              <div className="flex flex-col my-4">
                {videos.map((video, index) => (
                  <VideoListItem key={index} index={index} title={video.title} duration={video.duration}></VideoListItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Course;
