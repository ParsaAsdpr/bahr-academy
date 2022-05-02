import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Filter = (props) => {
  return (
    <div
      onClick={props.OnFilter}
      className={`px-5 py-2 cursor-pointer text-stone-400 rounded-md border border-stone-400 float-right mx-6 flex justify-between gap-6 items-center`}
    >
      فیلتر
      <FontAwesomeIcon icon={faFilter}></FontAwesomeIcon>
    </div>
  );
};

export default Filter;
