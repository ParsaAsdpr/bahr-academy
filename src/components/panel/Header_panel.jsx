import React, { Component } from "react";
import Dashboard from "./Dashboard";
import "./Hstyle.css";
class Header_panel extends Component {
  state = {
    user: 'salar.jpg',
  };
  render() {
    return (
      <div className="relative">
        <div className="w-[1000px] h-16 border-b border-black border-opacity-5 text-[#636363] flex justify-between active:border-none">
          <span className="text-[22px] font-bold mt-3">افزودن کاربر</span>
          <div className="w-[42%] flex">
            <input
              className="h-9 w-64 text-[14px] indent-4 mt-3 rounded-lg border border-opacity-10 border-black"
              type="text"
              placeholder="جستجو..."
            />
            <a className="search block w-[28px] cursor-pointer mt-[16px] relative left-[32px] h-[28px] rounded-md hover:translate-y-[1px]"></a>
            <div className="mt-[16px] w-7 h-7 alert">
              <div className="w-2 h-2 rounded-full bg-red-700 relative top-1 right-1"></div>
            </div>
            <div className="mt-[13px] h-9 relative w-20 mr-6 flex">
              <img
                src={this.state.user}
                className="w-9 h-9 rounded-full"
                alt=""
              />
              <input id="user" className="checkbox hidden" type="checkbox" />
              <label
                htmlFor="user"
                className="cursor-pointer w-9 h-9 userOption"
              ></label>
              <div
                style={{ boxShadow: "0 0 8px 1px #00000022" }}
                className="option absolute top-10 left-[15px] rounded-lg w-36 h-0 overflow-hidden bg-white"
              >
                <a className="profile block mt-4 indent-8 text-[12px] text-right" href="#">
                  پروفایل
                </a>
                <a className="edit block mt-4 indent-8 text-[12px]" href="#">
                  ویرایش پروفایل
                </a>
                <a
                  className="logout block mt-4 indent-8 text-[12px] text-[#e55b5b]"
                  href="#"
                >
                  خروج از حساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header_panel;
