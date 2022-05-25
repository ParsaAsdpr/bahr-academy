import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Style from "./Header.module.css";
import scrollGif from '../../../assets/images/scroll-down-mouse.gif'
import Typewriter from "typewriter-effect";

const LandingHeader = () => {

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight - 60,
      behavior: "smooth"
    });
  }

  return (
    <div
      className={`w-full h-screen ${Style.HeaderBackground} bg-no-repeat relative`}
    >
      <div className={Style.mask}>
        <div className="w-full h-full flex flex-col items-center max-w-7xl mx-auto justify-center gap-y-20 md:gap-y-14">
          <h1 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-cyan-700 md:text-sky-100 leading-loose px-10">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("خود آموزی سریع، کسب تجربه و ورود به بازار کار با هزینه کم با آکادمی بحر")
                  .callFunction(() => {
                    console.log("خوش آمدید");
                  })
                  .start();
              }
            }
            />
          </h1>
          <p className="text-xs sm:text-sm md:text-md text-right md:text-center md:text-opacity-60 px-10 md:px-40 leading-loose text-stone-400 md:text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و در ستون صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون
          </p>
          <div className="px-10 w-full">
            <SearchBox></SearchBox>
          </div>
        </div>
        <img src={scrollGif} alt="" className="w-12 mx-auto relative bottom-16 cursor-pointer" onClick={handleScroll}/>
      </div>
    </div>
  );
};

export default LandingHeader;
