import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBox = (props) => {
  return (
    <div className={`w-full border-2 border-gray-100 shadow-lg rounded-full h-12 flex items-center relative ${props.cName} float-right`}>
      <button
        className="flex items-center text-white bg-gradient-to-br from-indigo-500 to-indigo-300 rounded-full absolute left-0 p-4 hover:px-7 duration-300"
        style={{ marginRight: "1px" }}
      >
        <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
      </button>
      <input
        type="text"
        className="float-right h-full w-full font-extralight text-xs px-5 rounded-full bg-opacity-0 outline-0"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default SearchBox;
