import React from "react";
import avatar from "../../assets/images/guest.png"
import "./navbar.css"

const MobileSign = props => {
    return ( 
        <div className="mobileSign flex items-center mx-5 absolute top-0 left-0 translate-y-1/4">
        <p className="text-gray-700 text-xs float-left mx-3 username">مهمان</p>
        <img
          src={avatar}
          alt="avatar"
          className="w-9 h-9 border-2 border-gray-800 rounded-full float-left"
        />
      </div>
     );
}
 
export default MobileSign;
