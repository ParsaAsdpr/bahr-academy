import React from "react";
import Clock from "./Clock";

const CourseInfo = (props) => {
  return (
    <React.Fragment>
      <div className="mb-4">
        <Clock></Clock>
      </div>
      <div className="w-full flex flex-row justify-between className py-3">
        <p className="text-sm text-stone-900">قیمت دوره</p>
        <p className="text-green-500 text-sm">{props.price} تومان</p>
      </div>
      <div className="w-full flex flex-row justify-between className py-3">
        <p className="text-sm text-stone-900">تعداد دانشجویان</p>
        <p className="text-stone-700 text-sm">{props.students} نفر</p>
      </div>
      <div className="w-full flex flex-row justify-between className py-3">
        <p className="text-sm text-stone-900">مدت زمان دوره</p>
        <p className="text-stone-700 text-sm">
          {props.hour} ساعت و {props.min} دقیقه
        </p>
      </div>
      <button className="py-3 mt-3 bg-indigo-400 text-white w-full text-center rounded-md text-sm hover:bg-indigo-500 transition-colors">
        ثبت نام در دوره
      </button>
    </React.Fragment>
  );
};

export default CourseInfo;
