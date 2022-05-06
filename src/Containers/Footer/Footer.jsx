import React, { useState } from "react";
import { FooterLogo } from "../../components/Footer/Footerlogo";
import FooterListGroup from "../../components/Footer/Listgroup";
import { Newsletter } from "../../components/Footer/Newsletters";
import { BsTwitter, BsTelegram } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = (props) => {
  const [ footerItems ] = useState([
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
  ]);
  const socialClass = "cursor-pointer hover:scale-125 transition";

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
          <p className="text-white text-sm leading-loose">
            تمامی حقوق محفوظ سایت متعلق به آکادمی بحر میباشد.
          </p>
          <div className="text-white text-2xl flex flex-row gap-6">
            <BsTelegram className={socialClass} />
            <BsTwitter className={socialClass} />
            <AiFillLinkedin className={socialClass} />
            <IoLogoWhatsapp className={socialClass} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
