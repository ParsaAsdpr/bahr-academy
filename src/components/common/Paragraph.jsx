import React from "react";

const Paragraph = (props) => {
  let text = props.text;
  return (
    <p className="text-xs md:text-sm text-stone-700 leading-loose">
      {props.children}
      {text.split("\n").map(function (item, index) {
        return (
          <span key={index}>
            {item}
            <br />
          </span>
        );
      })}
    </p>
  );
};

export default Paragraph;
