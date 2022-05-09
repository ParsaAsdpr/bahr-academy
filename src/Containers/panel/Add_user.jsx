import React, { Component } from "react";
import Dashboard from "../../components/panel/Dasboard";
import Header_panel from "../../components/panel/Header_panel";
import "./Addstyle.css";
class Add_user extends Component {
  state = {
    data: [
      {
        name: "mamad",
        email: "mamad@yahoo.com",
        status: "آنلاین",
        category: "کاربر",
        last_visit: "12 مهر",
      },
      {
        name: "mamad",
        email: "mamad@yahoo.com",
        status: "آنلاین",
        category: "کاربر",
        last_visit: "12 مهر",
      },
      {
        name: "mamad",
        email: "mamad@yahoo.com",
        status: "آنلاین",
        category: "کاربر",
        last_visit: "12 مهر",
      },
      {
        name: "mamad",
        email: "mamad@yahoo.com",
        status: "آنلاین",
        category: "کاربر",
        last_visit: "12 مهر",
      },
      {
        name: "mamad",
        email: "mamad@yahoo.com",
        status: "آنلاین",
        category: "کاربر",
        last_visit: "12 مهر",
      },
      {
        name: "mamad",
        email: "mamad@yahoo.com",
        status: "آنلاین",
        category: "کاربر",
        last_visit: "12 مهر",
      },
    ],
  };
  render() {
    return (
      <div className="flex justify-between">
        <div>
          <Dashboard></Dashboard>
        </div>
        <div>
          <Header_panel></Header_panel>

          <div className="w-[90%] h-96 mt-16">
            <div className="flex">
              <input
                className="border border-[#CBCBCB] w-[580px] rounded-[10px] h-9 text-[12px] indent-2 bg-[#eeeeee] text-[#cbcbcb]"
                placeholder="جستجوی همه ی کاربران ..."
                type="text"
              />
              <a href="#" className="w-9 h-9 addsearch relative left-10"></a>
              <a
                className="filter w-32 rounded-xl h-9 text-[12px] border border-[#707070] text-[#707070] text-right leading-8 indent-2"
                href=""
              >
                فیلتر کردن
              </a>
              <a
                className=" adduser w-32 rounded-xl h-9 mr-7 text-[12px] border border-[#2cb566] text-[#2cb566] text-right leading-8 indent-2"
                href=""
              >
                افزودن کاربر
              </a>
            </div>
            <table className="table w-full text-center h-[400px] mt-6 text-[14px] border border-red-800">
              <thead className="text-white text-[12px]">
                <tr className="bg-[#2eb2a4] py-6">
                  <th>نام کاربری</th>
                  <th>ایمیل</th>
                  <th>وضعیت</th>
                  <th>دسته بندی</th>
                  <th>آخرین بازدید</th>
                  <th>پروفابل</th>
                  <th>مدیریت</th>
                </tr>
              </thead>
              <tbody>
                {this.state.data.map((d) => (
                  <tr className="border-t border-[#707070] border-opacity-20">
                    <td>{d.name}</td>
                    <td>{d.email}</td>
                    <td>{d.status}</td>
                    <td>{d.category}</td>
                    <td>{d.last_visit}</td>
                    <td>
                      <a>مشاهده پروفایل</a>
                    </td>
                    <td>
                      <div></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Add_user;
