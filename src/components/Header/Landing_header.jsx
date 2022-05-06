import React, { useState } from "react";
import SearchBox from "./SearchBox";

const Landing_header = () => {
  return (
    <div className="w-full bg-gray-900 px-44 py-14 h-[580px] .header-landing">
      <h1 className="text-[35px] text-sky-200 text-right header-title">
        خود آموزی سریع، کسب تجربه و ورود به بازار کار با هزینه کم با آکادمی ما
      </h1>
      <div className="w-2/3 mx-auto">
        <span className="text-[18px] text-center text-stone-300 mt-12 leading-loose">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون
        </span>
      </div>

      <SearchBox></SearchBox>
    </div>
  );
};

export default Landing_header;
