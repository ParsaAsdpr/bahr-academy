import React, { useState, useEffect } from "react";
import Title from "../common/Title";
import resume from "../../assets/images/resume.svg";
import deaf from "../../assets/images/deaf.svg";
import cash from "../../assets/images/cash.svg";
import Advantage from "../Advatnages/Advantage";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, translateY: "0%", transition: { duration: 1 } },
  hidden: { opacity: 0, translateY: "50%" },
};

const Advantages = (props) => {
  const [advantages] = useState([
    {
      title: "ورود به بازار کار",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نلورم ایپسوم متن ",
      image: resume,
    },
    {
      title: "ورود به بازار کار",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نلورم ایپسوم متن ",
      image: deaf,
    },
    {
      title: "ورود به بازار کار",
      desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نلورم ایپسوم متن ",
      image: cash,
    },
  ]);

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="flex justify-center flex-col px-5 my-16"
    >
      <div className="my-4">
        <Title text="مزایای آکادمی بحر" cName="text-center"></Title>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 mt-5">
        {advantages.map((advantage, index) => {
          return (
            <Advantage
              title={advantage.title}
              image={advantage.image}
              desc={advantage.desc}
              key={index}
            ></Advantage>
          );
        })}
      </div>
    </motion.section>
  );
};

export default Advantages;
