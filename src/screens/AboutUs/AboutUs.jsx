import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.section
      className="max-w-7xl mx-auto p-0 md:p-7 pt-28 md:pt-28"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
        <div className="border-t border-stone-400 text-center">
        <h1 className=" text-xl md:text-2xl lg:text-3xl bg-white px-7 text-stone-600 font-bold inline bottom-6 relative">درباره اکادمی بحر</h1>
        <p className="text-sm md:text-lg leading-10 text-stone-500 px-7 pb-10">پژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت آموزشی و همچنین آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم بتوانیم با اما دیگر صحبت در مورد خودمان کافی است بگذارید در مورد شما صحبت کنیم. خواه اینکه دارای یک کسب و کار باشید و یا اینکه خبرنامه‌های ایمیل را برای مشتریان خود مدیریت می‌کنید، به یک سرویس ایمیل مارکتینگ نیاز دارید تا از موارد پیچیده جلوگیری کند و بتوانید بر روی کار خود تمرکز کنید همچنین تمرکزی بر سایر عناصر شرکت به دور از خدمات اصلی آنها مانند تعامل اجتماعی و فرهنگ وجود دارد راهکار های نوین فرصتی برای افراد خواهان پیشرفت فراهم کنیم</p>
        </div>
    </motion.section>
  );
};

export default AboutUs;
