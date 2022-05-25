import React, { Component } from "react";
import Dashboard from "../../components/panel/Dashboard";
import Header_panel from "../../components/panel/Header_panel";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="flex justify-between">
        <div>
          <Dashboard></Dashboard>
        </div>
        <div>
          <Header_panel></Header_panel>

          <div className="w-[94%] mt-10">
            <div className="w-full flex justify-between">
              <div className="h-56 w-1/3 bg-purple-700 ml-5 rounded-xl"></div>
              <div className="h-56 w-2/3 bg-purple-900 rounded-xl"></div>
            </div>
            <div className="w-full flex justify-between mt-5">
              <div className="h-56 w-2/3 bg-slate-900 ml-5 rounded-xl"></div>
              <div className="h-56 w-1/3 bg-yellow-700 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
