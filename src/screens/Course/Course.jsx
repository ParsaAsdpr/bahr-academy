import React, { useState } from "react";
import Title from "../../components/common/Title";
import Share from "../../components/common/Share";
import CourseInfo from "../../components/Courses/StatsNInfo";
import MainCourse from "../../components/Courses/MainC";
import CourseTutor from "../../components/Courses/CourseTutor";
import VideoListItem from "../../components/Courses/VideoListItem";
import Comments from "../../components/common/Comments";
import javascript from "../../assets/images/javascript.png";
import Attachment from "../../components/common/Attachment";
import {motion} from 'framer-motion';
import ACBox from "../../components/common/ACbox";

const Course = (props) => {
  const [course, setCourse] = useState({
    title: "جاوا اسکریپت مقدماتی",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی \n \n مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحانرایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائهراهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای \n \n \nاصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفادهقرار گیرد.",
    price: "350000",
    students: "1124",
    duration: "18:23",
    videos: [
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
      { title: "معرفی دوره", duration: "12:34" },
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
  });

  const price = parseInt(course.price).toLocaleString();
  const students = parseInt(course.students).toLocaleString();
  const hour = course.duration.split(":")[0];
  const min = course.duration.split(":")[1];
  const { tags, comments, desc, title, videos } = course;
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="max-w-7xl mt-16 mx-auto p-0 md:p-7 overflow-hidden">
      <div className="md:grid md:grid-cols-3 gap-x-8">
        <div className="grid grid-cols-1 gap-5 col-span-2">
          <ACBox>
            <MainCourse title={title} tags={tags} desc={desc}>
            <Attachment
          image={javascript}
          alt="جاوا اسکریپت چیست؟"
          caption="تصویر جاوااسکریپت"
        ></Attachment>
            </MainCourse>
          </ACBox>
          <ACBox>
            <Comments comments={comments}></Comments>
          </ACBox>
        </div>
        <div className="grid grid-cols-1 mt-5 md:mt-0 auto-rows-min gap-5">
          <ACBox>
            <div className="mb-5">
              <Title text="تاریخ شروع دوره"></Title>
            </div>
            <CourseInfo
              price={price}
              students={students}
              hour={hour}
              min={min}
            ></CourseInfo>
          </ACBox>

          <ACBox>
            <Share></Share>
          </ACBox>

          <ACBox>
            <Title text="مدرس این دوره"></Title>
            <CourseTutor></CourseTutor>
          </ACBox>

          <ACBox>
            <Title text="فهرست ویدیو ها"></Title>
            <div className="flex flex-col my-4">
              {videos.map((video, index) => (
                <VideoListItem
                  key={index}
                  index={index}
                  title={video.title}
                  duration={video.duration}
                ></VideoListItem>
              ))}
            </div>
          </ACBox>
        </div>
      </div>
    </motion.section>
  );
};

export default Course;
