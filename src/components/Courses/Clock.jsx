import React from "react";

const Clock = (props) => {
  return (
    <div className="bg-red-400 px-3 py-6 rounded-sm flex flex-col gap-6">
      <div className="grid grid-cols-4 gap-1 sm:gap-3">
        <div className="py-4 sm:py-6 bg-red-300 rounded-sm text-red-100 text-md sm:text-2xl text-center">
          48
        </div>
        <div className="py-4 sm:py-6 bg-red-300 rounded-sm text-red-100 text-md sm:text-2xl text-center">
          29
        </div>
        <div className="py-4 sm:py-6 bg-red-300 rounded-sm text-red-100 text-md sm:text-2xl text-center">
          14
        </div>
        <div className="py-4 sm:py-6 bg-red-300 rounded-sm text-red-100 text-md sm:text-2xl text-center">
          1
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 sm:gap-3">
          <p className="text-center text-xs sm:text-md text-red-100">ثانیه</p>
          <p className="text-center text-xs sm:text-md text-red-100">دقیقه</p>
          <p className="text-center text-xs sm:text-md text-red-100">ساعت</p>
          <p className="text-center text-xs sm:text-md text-red-100">روز</p>
      </div>
    </div>
  );
};

export default Clock;
