import React from "react";

const MobileMenuLink = (props) => {
  return (
    <li>
      <a
        href={props.path}
        class="block text-sm px-2 py-4 text-white bg-indigo-500 font-semibold"
      >
        {props.title}
      </a>
    </li>
  );
};

export { MobileMenuLink };
