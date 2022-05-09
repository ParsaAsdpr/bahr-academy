import React from 'react';
import Attachment from "../common/Attachment";
import Paragraph from "../common/Paragraph";
import Tag from "../common/Tag";
import Title from "../common/Title";
import javascript from "../../assets/images/javascript.png";
import Profile from "../../components/Blog/Profile";
import Dislike from "../../components/common/Dislike";
import Like from "../../components/common/Like";
import { AiFillEye } from "react-icons/ai";



const MainArticle = props => {
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

        <div className="w-full flex flex-col gap-y-4 md:flex-row justify-between items-center py-4">
                <Profile
                  name={props.author}
                  avatar={props.avatar}
                ></Profile>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row gap-6">
                    <Dislike count={props.dislikes} dislike={false}></Dislike>
                    <Like count={props.likes} liked={false}></Like>
                  </div>
                  <div className="flex flex-row gap-2 text-xs text-stone-500">
                    <AiFillEye />
                    1203
                  </div>
                </div>
              </div>
  
        <div className="float-right my-5">
          <div className="pb-3 md:pb-6">
            <Title text={props.title}></Title>
          </div>
          <Paragraph text={props.desc}>
          </Paragraph>
          {props.children}
        </div>
      </main>
     );
}
 
export default MainArticle;