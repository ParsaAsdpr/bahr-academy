import React from "react";

const SearchBox = () => {
  return (
    <div className="w-[800px] mx-auto my-10 bg-opacity-20 bg-cyan-200 h-[70px] rounded-full px-5 py-3 flex justify-between">
      <input
        className="border-none rounded-2xl indent-3 h-12 w-[620px] active:border-none text-[12px] text-neutral-500"
        placeholder="چی میخوای یاد بگیری؟"
      ></input>
      <span className="text-white cursor-pointer rounded-2xl text-center leading-[45px] w-28 text-xs bg-black block">
        جستجو
      </span>
    </div>
  );
};

export default SearchBox;
