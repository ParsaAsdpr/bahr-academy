import React from "react";

const CourseCard = props => {
    return (
          <div
            className="rounded-2xl overflow-hidden"
            style={{boxShadow: "0 0 20px 1px #0000001e"}}
          >
            <div className="py-4 flex items-center justify-center h-1/3">
              <img src={props.image} className="w-24 h-24" alt="" />
            </div>
            <div className="bg-gradient-to-t from-indigo-300 to-indigo-600 h-2/3 relative px-3 md:px-5 py-4">
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
              <p className=" md:leading-7 leading-7 text-xs opacity-80 text-white py-4">
                {props.desc}
              </p>
            </div>
          </div>
    );
  }

export {CourseCard};
