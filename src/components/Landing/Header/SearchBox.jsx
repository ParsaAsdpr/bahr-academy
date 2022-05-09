import React from "react";

const SearchBox = () => {
  return (
    <div className="w-full md:w-2/3 mx-auto my-10 shadow-lg md:shadow-none shadow-cyan-100 bg-opacity-40 md:bg-opacity-40 bg-cyan-200 rounded-2xl md:rounded-3xl px-5 py-3 flex justify-between gap-5">
      <input
        className="border-none rounded-xl md:rounded-2xl indent-3 py-3 md:py-4 w-full active:border-none text-2xs sm:text-xs text-neutral-500"
        placeholder="چی میخوای یاد بگیری؟"
      ></input>
      <span className="text-white cursor-pointer rounded-xl md:rounded-2xl flex items-center justify-center px-3 sm:px-6 md:px-10 text-2xs sm:text-xs md:text-sm bg-indigo-500 transition-colors hover:bg-indigo-600">
        جستجو
      </span>
    </div>
  );
};

export default SearchBox;
