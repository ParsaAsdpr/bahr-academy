import React from "react";

const MobileMenu = (props) => {
  return (
    <div class="fixed top-0 overflow-hidden right-0 h-full w-0 mobile-menu bg-white duration-200 shadow-2xl z-50">
        <ul class="overflow-hidden block">
            {props.children}
        </ul>
    </div>
  );
};

export {MobileMenu};
