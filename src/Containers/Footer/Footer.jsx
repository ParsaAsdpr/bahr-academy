import React, { Component } from "react";
import { FooterLogo } from "../../components/Footer/Footerlogo";
import FooterListGroup from "../../components/Footer/Listgroup";
import { Newsletter } from "../../components/Footer/Newsletters";

class Footer extends Component {
  state = {
    footerItems: [
      {
        title: "آکادمی",
        subItems: [
          "درباره ما",
          "رویداد ها",
          "تماس با ما",
          "پشتیبانی",
          "شرایط استفاده",
        ],
      },
      {
        title: "همکاری با ما",
        subItems: [
          "تدریس در آکادمی بحر",
          "گت ورک و کسب درامد",
          "فرصت های شغلی",
          "حریم خصوصی",
        ],
      },
      {
        title: "بلاگ",
        subItems: ["مقالات", "خبرنامه آکادمی", "سوالات رایج"],
      },
      {
        title: "دسته بندی",
        subItems: [
          "طراحی وبسایت",
          "برنامه نویسی موبایل",
          "برنامه نویسی ویندوز",
          "هوش مصنوعی",
        ],
      },
    ],
    socials:[<svg xmlns="http://www.w3.org/2000/svg" width="30.329" height="27.233" viewBox="0 0 30.329 27.233"><path id="telegram" d="M38.115,13.636,11.18,24.617s-1.273.453-1.175,1.29,1.14,1.221,1.14,1.221l6.777,2.37s2.046,6.971,2.448,8.3.726,1.354.726,1.354a.742.742,0,0,0,.716-.1L26.191,34.9l6.824,5.437a1.761,1.761,0,0,0,2.518-.906l4.8-25.133C40.329,12.626,38.115,13.636,38.115,13.636ZM33.347,37.412l-7.3-5.816L23.78,33.741l.5-4.564,9.732-9.035L20.744,27.857,14.86,25.8l22.45-9.153Z" transform="translate(-10 -13.334)" fill="#fff"/></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="30.531" height="30.531" viewBox="0 0 30.531 30.531"><g id="Group_161" data-name="Group 161" transform="translate(-217 -3995)"><g id="whatsapp" transform="translate(217 3995)"><path id="Path_145" data-name="Path 145" d="M0,0H30.531V30.531H0Z" fill="none"/><path id="Path_146" data-name="Path 146" d="M8.683,22.983l.921.538a10.174,10.174,0,1,0-3.68-3.68l.537.921-.831,3.054,3.053-.833Zm-6.677,4.46,1.72-6.32a12.716,12.716,0,1,1,4.6,4.6ZM10.13,8.752a4.309,4.309,0,0,1,.513-.005c.069.005.137.013.206.02a.641.641,0,0,1,.5.317q.569,1.29,1.1,2.6a.772.772,0,0,1-.118.683,5.572,5.572,0,0,1-.335.473c-.144.184-.453.523-.453.523a.408.408,0,0,0-.078.337,1.125,1.125,0,0,0,.13.261l.075.121a8.059,8.059,0,0,0,1.3,1.613c.153.148.3.3.462.44a7.645,7.645,0,0,0,2,1.272l.006,0c.108.047.163.073.321.14a1.828,1.828,0,0,0,.243.084.445.445,0,0,0,.467-.165,14.855,14.855,0,0,1,1.013-1.188v0a.613.613,0,0,1,.481-.162.659.659,0,0,1,.225.051c.676.309,1.781.791,1.781.791l.74.332a.429.429,0,0,1,.242.337,2.456,2.456,0,0,1-.017.475,3.543,3.543,0,0,1-.239.932,1.469,1.469,0,0,1-.267.384,3.025,3.025,0,0,1-.42.366q-.078.059-.159.114-.237.151-.487.28a2.532,2.532,0,0,1-1.06.293,6.558,6.558,0,0,1-.707.018c-.01,0-.723-.111-.723-.111a12.019,12.019,0,0,1-4.885-2.6c-.288-.253-.553-.525-.826-.8a12.1,12.1,0,0,1-2.506-3.488,4.414,4.414,0,0,1-.421-1.8,3.472,3.472,0,0,1,.717-2.137,3.009,3.009,0,0,1,.332-.388,1.619,1.619,0,0,1,.374-.29,1.223,1.223,0,0,1,.472-.127Z" transform="translate(0.544 0.544)" fill="#fff"/></g></g></svg>,
    <svg id="Page-1" xmlns="http://www.w3.org/2000/svg" width="26.882" height="26.882" viewBox="0 0 26.882 26.882"><g id="Social-Icons---Rounded-Black"><g id="Linkedin"><path id="Rounded" d="M2.987,26.882H23.895a2.987,2.987,0,0,0,2.987-2.987V2.987A2.987,2.987,0,0,0,23.895,0H2.987A2.987,2.987,0,0,0,0,2.987V23.895A2.987,2.987,0,0,0,2.987,26.882Z" fill="#fff" fillRule="evenodd"/><path id="Path_147" data-name="Path 147" d="M29.415,29.415H25.426V22.62c0-1.863-.708-2.9-2.182-2.9-1.6,0-2.442,1.083-2.442,2.9v6.794H16.957V16.472H20.8v1.743a4.516,4.516,0,0,1,3.9-2.139c2.745,0,4.711,1.676,4.711,5.144ZM12.371,14.777a2.388,2.388,0,1,1,2.37-2.388A2.379,2.379,0,0,1,12.371,14.777ZM10.386,29.415h4.009V16.472H10.386Z" transform="translate(-6.266 -6.266)" fill="#6389ce" fillRule="evenodd"/></g></g></svg>,
    <svg xmlns="http://www.w3.org/2000/svg" width="28.094" height="22.473" viewBox="0 0 28.094 22.473"><g id="Page-1" transform="translate(0 -0.002)"><g id="Dribbble-Light-Preview" transform="translate(0 0.002)"><g id="icons" transform="translate(0 0)"><path id="twitter-_154_" data-name="twitter-[#154]" d="M12.836,7383.475a16.158,16.158,0,0,0,16.4-16.14c0-.252,0-.491-.017-.744a11.618,11.618,0,0,0,2.875-2.936,11.768,11.768,0,0,1-3.31.9,5.743,5.743,0,0,0,2.534-3.147,11.372,11.372,0,0,1-3.661,1.376,5.843,5.843,0,0,0-8.156-.238,5.622,5.622,0,0,0-1.667,5.422,16.512,16.512,0,0,1-11.88-5.927,5.624,5.624,0,0,0,1.785,7.57,5.857,5.857,0,0,1-2.617-.7v.071a5.713,5.713,0,0,0,4.624,5.562,5.83,5.83,0,0,1-2.6.085,5.754,5.754,0,0,0,5.384,3.947A11.56,11.56,0,0,1,5.372,7381c-.458,0-.916-.027-1.372-.071a16.607,16.607,0,0,0,8.836,2.543" transform="translate(-4 -7361.002)" fill="#fff" fillRule="evenodd"/></g></g></g></svg>
]
  };
  render() {
    const { footerItems, socials } = this.state;
    return (
      <footer className="w-full">
        <div className="w-full bg-gradient-to-r from-blue-400 to-violet-400">
          <div className="max-w-7xl px-10 py-20 mx-auto relative grid gap-x-0 gap-y-8 grid-cols-2 sm:grid-cols-4 lg:grid-cols-7">
            <Newsletter cName="col-span-2 sm:col-span-4 lg:col-span-2"></Newsletter>
            {footerItems.map((item, index) => {
              return (
                <FooterListGroup key={index} title={item.title}>
                  {item.subItems.map((subitem, index) => {
                    return (
                      <li
                        className="text-xs leading-9 text-white opacity-70 hover:opacity-95 transition cursor-pointer"
                        key={index}
                      >
                        {subitem}
                      </li>
                    );
                  })}
                </FooterListGroup>
              );
            })}
            <FooterLogo cName="col-span-2 sm:col-span-4 lg:col-span-1"></FooterLogo>
          </div>
        </div>
        <div className="w-full px-20 py-10" style={{ background: "#6389CE" }}>
          <div className="max-w-7xl flex justify-between mx-auto">
              <p className="text-white text-sm leading-loose">تمامی حقوق محفوظ سایت متعلق به آکادمی بحر میباشد.</p>
              <div>
                  {socials.map((social, index) => {
                      return(
                          <a href="#" className={`text-white m-5 cursor-pointer float-left`} key={index}>{social}</a>
                      )
                  })}
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
