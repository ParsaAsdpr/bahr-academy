import React from "react";

const Profile = (props) => {
  return (
    <div className="flex flex-row items-center gap-3">
      <div className="rounded-full overflow-hidden float-right h-12">
        <img
          src={props.avatar}
          alt=""
          className="w-full h-full"
        />
      </div>
      <div>
        <h4 className="text-stone-800 text-sm">{props.name}</h4>
        <a className="text-xs text-blue-500 cursor-pointer mt-2">
          مشاهده پروفایل
        </a>
      </div>
    </div>
  );
};

export default Profile;
