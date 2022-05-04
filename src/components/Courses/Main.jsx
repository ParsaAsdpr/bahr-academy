import React from "react";
import Attachment from "../common/Attachment";
import Paragraph from "../common/Paragraph";
import { Tag } from "../common/Tag";
import { Title } from "../common/Title";
import javascript from "../../assets/images/javascript.png";

const Main = (props) => {
  return (
    <main>
      <div className="w-full overflow-hidden max-h-96 rounded-md">
        <img className="w-full object-cover" src={javascript} alt="cover" />
      </div>
      <div className="my-6">
        <h5 className="text-md text-stone-700">برچسب ها</h5>
        <div className="mt-3">
          {props.tags.map((tag, index) => {
            return <Tag text={tag} key={index}></Tag>;
          })}
        </div>
      </div>

      <div className="float-right my-5">
        <div className="pb-3 md:pb-6">
          <Title text={props.title}></Title>
        </div>
        <Paragraph text={props.desc}>
        </Paragraph>
        <Attachment
          image={javascript}
          alt="جاوا اسکریپت چیست؟"
          caption="تصویر جاوااسکریپت"
        ></Attachment>
      </div>
    </main>
  );
};

export default Main;
