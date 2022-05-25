import React, { Component } from "react";
import Dashboard from "../../components/panel/Dashboard";
import Header_panel from "../../components/panel/Header_panel";
import { useState } from "react";
import DatePicker, { Calendar } from "react-multi-date-picker";

const Home = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <Dashboard></Dashboard>
        </div>
        <div>
          <Header_panel></Header_panel>

          <div className="w-[94%] mt-10">
            <div className="w-full flex justify-between">
              <div className="h-56 w-1/3  ml-5 rounded-xl shadow-[0_2px_18px_-10px_rgba(0,0,0,0.9)]">
                <Calendar className="w-full h-full overflow-hidden" value={value} onChange={setValue} />
              </div>
              <div className="h-56 w-2/3 rounded-xl shadow-[0_2px_18px_-10px_rgba(0,0,0,0.9)]"></div>
            </div>
            <div className="w-full flex justify-between mt-5">
              <div className="h-60 w-2/3 ml-5 rounded-xl shadow-[0_2px_18px_-10px_rgba(0,0,0,0.9)]"></div>
              <div className="h-60 w-1/3 rounded-xl shadow-[0_2px_18px_-10px_rgba(0,0,0,0.9)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
