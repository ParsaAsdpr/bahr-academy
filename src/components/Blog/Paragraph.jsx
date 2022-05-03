import React from "react";

const Paragraph = (props) => {
  return <p className="text-xs md:text-sm text-stone-700 leading-loose">{props.children}</p>;
};

export default Paragraph;
