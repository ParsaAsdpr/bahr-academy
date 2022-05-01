import React, { Component } from "react";
import { Title } from "../../components/common/Title";
import resume from "../../assets/images/resume.svg";
import deaf from "../../assets/images/deaf.svg";
import cash from "../../assets/images/cash.svg";
import Advantage from "../../components/Advatnages/Advantage";

class Advantages extends Component {
  state = {
    advantages: [
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
    ],
  };
  render() {
    const { advantages } = this.state;
    return (
      <section className="flex justify-center max-w-7xl mx-auto flex-col px-5">
        <Title text="مزایای آکادمی بحر" cName="text-center"></Title>
        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
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
      </section>
    );
  }
}

export default Advantages;
