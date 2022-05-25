import React from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import SortButton from "./SortDropdown";
import FilterModal from "./FilterModal";

const PageContainer = (props) => {
  return (
    <div className="max-w-7xl py-6 px-5 mx-auto">
      <h1 className="text-xl text-stone-700">{props.title}</h1>
      <div className="my-5 grid grid-cols-12 gap-y-7 gap-4">
        <div className="md:col-span-4 col-span-full">
          <SearchBox placeholder="جستجو..."></SearchBox>
        </div>
        <div className="md:col-span-2 col-span-6">
          <FilterModal></FilterModal>
        </div>

        <div className="col-span-6">
        <SortButton>
          {props.items.map((item, index) => {
            return (
              <a
                href={item.url}
                key={index}
                className="text-gray-700 block px-4 py-2 text-center text-sm hover:bg-stone-50"
              >
                {item.text}
              </a>
            );
          })}
        </SortButton>
        </div>
      </div>
      <div className="px-5 mt-8 grid gap-4 gap-y-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {props.children}
      </div>
    </div>
  );
};

export default PageContainer;
