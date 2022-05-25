import React from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import logo from "../../assets/images/logo.png";
import "react-chat-widget/lib/styles.css";

const H = () => {
  React.useEffect(() => {
    addResponseMessage("به آکادمی ما خوش آمدید سوالات خود را در اینجا بپرسید!");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
    addResponseMessage("پیام شما ارسال شد و در اسرع وقت به شما پاسخ داده میشود.");
  };

  return (
    <div dir="ltr" className="text-center">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        title="پشتیبانی آکادمی"
        subtitle="سوالات خود را اینجا بپرسید"
        emojis={true}
        senderPlaceHolder="پیام خود را بنویسید..."
      />
    </div>
  );
};

export default H;
