import React, { useState } from "react";
import salar from "../../assets/images/salar.jpg";
import { Title } from "../../components/common/Title";
import TutorCard from "../../components/Tutors/TutorCard";

const Tutors = () => {
  const [tutors] = useState([
    {
      name: "سالار",
      avatar: salar,
      about:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای  ",
    },
    {
      name: "سالار",
      avatar: salar,
      about:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای  ",
    },
    {
      name: "سالار",
      avatar: salar,
      about:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای  ",
    },
    {
      name: "سالار",
      avatar: salar,
      about:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای  ",
    },
  ]);
  return (
    <section className="max-w-7xl mx-auto px-5">
      <Title text="مدرسین"></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-4 mt-16">
        {tutors.map((tutor, index) => {
          return (
            <TutorCard
              name={tutor.name}
              avatar={tutor.avatar}
              key={index}
              about={tutor.about}
            ></TutorCard>
          );
        })}
      </div>
    </section>
  );
};

export default Tutors;
