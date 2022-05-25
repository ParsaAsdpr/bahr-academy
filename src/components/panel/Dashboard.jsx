import React, { Component } from "react";
import "./Dstyle.css";
import salar from "../../assets/images/salar.jpg";
import user from "../../assets/images/usere.png";
import next from "../../assets/images/next.png";
import circle from "../../assets/images/circle.png";

class Dashboard extends Component {
  state = {
    avatar: salar,
    user: user,
    arrow: next,
    circle: circle,
  };
  render() {
    return (
      <div className="w-72 bg-gradient-to-b from-teal-600 to-teal-300 h-screen py-8 text-[100px] rounded-tl-3xl text-black">
        <img
          src={this.state.avatar}
          className="w-20 h-20 mx-auto rounded-full"
          alt=""
        />
        <p className="text-[16px] font-bold text-white my-4 text-center">
          محمد محمدی
        </p>
        <div className="w-14 h-4 flex justify-between mx-auto mt-7 mb-3">
          <img src={this.state.user} className="h-4" alt="" />
          <span className="text-[11px] leading-5 text-[#dcdcdc]">ادمین</span>
        </div>
        <span className=" block w-[90%] text-white font-sans mx-4 border-t font-bold border-white border-opacity-25 p-3 text-[18px]">
          داشبورد
        </span>

        <ul className="w-full mt-2">
          <li className="text-[16px] relative li checked:bg-white hover:bg-opacity-30 indent-6 mr-2  pt-2">
            <input className="content" id="avali" type="radio" name="name" />
            <div className="w-6 h-6 arrow absolute top-[14px] left-6"></div>
            <label
              className="label block w-[280px] text-white cursor-pointer p-1 rounded-tr-lg"
              htmlFor="avali"
            >
              مدیریت کاربران
            </label>
            <div className="h-0 mt-2 overflow-hidden rounded-br-lg item">
              <a
                className="block text-white link text-[14px] text-right indent-16 hover:bg-white hover:bg-opacity-40 mt-2"
                href=""
              >
                اضافه کردن کاربر
              </a>
              <a
                className="block text-white text-[14px] link text-right indent-16 hover:bg-white hover:bg-opacity-40 mt-2"
                href=""
              >
                لیست کاربران
              </a>
            </div>
          </li>

          <li className="text-[16px] relative li checked:bg-white hover:bg-opacity-30 indent-6 mr-2  pt-2">
            <input className="content" id="dovomi" type="radio" name="name" />
            <div className="w-6 h-6 arrow absolute top-[14px] left-6"></div>
            <label
              className="label block w-[280px] text-white cursor-pointer p-1 rounded-tr-lg"
              htmlFor="dovomi"
            >
              مدیریت کاربران
            </label>
            <div className="h-0 mt-2 overflow-hidden rounded-br-lg item">
              <a
                className="block text-white link text-[14px] text-right indent-16 hover:bg-white hover:bg-opacity-40 mt-2"
                href=""
              >
                اضافه کردن کاربر
              </a>
              <a
                className="block text-white text-[14px] link text-right indent-16 hover:bg-white hover:bg-opacity-40 mt-2"
                href=""
              >
                لیست کاربران
              </a>
            </div>
          </li>
          <li className="text-[16px] relative li checked:bg-white hover:bg-opacity-30 indent-6 mr-2  pt-2">
            <input className="content" id="sevomi" type="radio" name="name" />
            <div className="w-6 h-6 arrow absolute top-[14px] left-6"></div>
            <label
              className="label block w-[280px] text-white cursor-pointer p-1 rounded-tr-lg"
              htmlFor="sevomi"
            >
              مدیریت کاربران
            </label>
            <div className="h-0 mt-2 overflow-hidden rounded-br-lg item">
              <a
                className="block text-white link text-[14px] text-right indent-16 hover:bg-white hover:bg-opacity-40 mt-2"
                href=""
              >
                اضافه کردن کاربر
              </a>
              <a
                className="block text-white text-[14px] link text-right indent-16 hover:bg-white hover:bg-opacity-40 mt-2"
                href=""
              >
                لیست کاربران
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
