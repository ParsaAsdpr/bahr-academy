import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const SortButton = (props) => {
  const [ showOptions, setShowOptions ] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  }
  return (
    <div className="float-left">

      <div className="relative inline-block text-left duration-200 ease-in-out">
        <div>
          <button
          onClick={handleClick}
            type="button"
            className="inline-flex justify-between gap-8 w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 
            hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            مرتب سازی بر اساس
            <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          </button>
        </div>

       {showOptions && ( <div
          className="origin-top-right absolute z-50 right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="none">
            {props.children}
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default SortButton;
