import React from "react";

const MenuButton = (props) => {
  return (
    <button class="w-10 h10 flex md:hidden mobile-menu-button justify-center items-center mx-6">
      <svg
        class="w-6 h-6 text-gray-700"
        x-show="!showMenu"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  );
};

export { MenuButton };
