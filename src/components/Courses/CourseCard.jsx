import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./Courses.css"

const CourseCard = (props) => {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 0 20px 1px #0000001e" }}
    >
      <div className="pt-4 pb-5 flex items-center justify-center h-1/3">
        <img src={props.image} className="w-24 h-24" alt="" />
      </div>
      <div
        className="h-2/3 relative px-3 md:px-5 py-4 pb-6"
        style={{
          background: `linear-gradient(to top, #${props.fc},#${props.lc})`,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto absolute top-0 left-0"
          viewBox="0 0 508 37.933"
        >
          <path
            id="Path_100"
            d="M0,0H508V37.853S501.515,5.18,397.879,11.695C354.767,14.4,283.749,35.139,210.285,37.853,108.374,39.613,0,11.695,0,11.695Z"
            fill="#fff"
          />
        </svg>

        <h3 className="text-white text-lg font-bold text-center pt-10 sm:pt-10 md:pt-8">
          دوره React.js
        </h3>
        <p className=" md:leading-7 leading-7 text-xs opacity-80 text-white py-4 overflow-ellipsis overflow-hidden h-40">
          {props.desc}
        </p>
        <a className="text-white text-sm block overflow-hidden relative cursor-pointer transition-all registerCourse">
          مشاهده دوره و ثبت نام
          <FontAwesomeIcon icon={faArrowLeft} className="px-2"></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export { CourseCard };
