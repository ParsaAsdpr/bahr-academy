import React from "react";
import "./Share.css";
import {BsTwitter, BsTelegram} from "react-icons/bs"
import {AiFillInstagram} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'

const Share = (props) => {
  return (
    <div className="share-container px-10 sm:px-16 md:px-6 lg:px-16">
      <div className="share-socials grid grid-cols-4">
      <a href="#" className="share-links">
        <BsTwitter />
        </a>
        <a href="#" className="share-links">
          <BsTelegram />
        </a>
        <a href="#" className="share-links">
          <AiFillInstagram />
        </a>
        <a href="#" className="share-links">
          <IoLogoWhatsapp />
        </a>
      </div>
      <div className="share-mask">اشتراک گذاری</div>
    </div>
  );
};

export default Share;
