import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Share.css";

const Share = (props) => {
  return (
    // <div className="btn-cont">
    //   <div class="btn_wrap">
    //     <span>Share</span>
    //     <div class="container">
    //       <FontAwesomeIcon icon={"facebook"}></FontAwesomeIcon>
    //       <i class="fab fa-twitter"></i>
    //       <i class="fab fa-instagram"></i>
    //       <i class="fab fa-github"></i>
    //     </div>
    //   </div>
    // </div>
    <div className="share-container px-10 sm:px-16 md:px-6 lg:px-16">
      <div className="share-socials grid grid-cols-4">
        <a href="#" className="share-links">O</a>
        <a href="#" className="share-links">O</a>
        <a href="#" className="share-links">O</a>
        <a href="#" className="share-links">O</a>
      </div>
      <div className="share-mask">اشتراک گذاری</div>
    </div>
  );
};

export default Share;
