import React, { useContext } from "react";
import Comment from "../../components/common/Comment";
import Title from "../../components/common/Title";
import LoggedContext from '../../core/utils/LoggedContext'

const Comments = (props) => {
  const isLogged = useContext(LoggedContext);

  return (
    <>
      <div className="mb-5">
        <Title text="نظرات"></Title>
      </div>

      {isLogged ? (
      <div className="w-full">
      <textarea
        className="border w-full h-36 p-4 text-xs text-stone-600 border-stone-400 rounded-md"
        placeholder="نظر خود را بنویسید"
        style={{ resize: "none" }}
      ></textarea>
      <button className="py-3 bg-indigo-400 text-white w-full text-center rounded-md text-sm hover:bg-indigo-500 transition-colors">
        ثبت نظر
      </button>
    </div>
      ) : (<p>لطفا وارد شوید</p>)}

      {props.comments.map((comment, index) => {
        return (
          <Comment
            key={index}
            name={comment.name}
            text={comment.text}
            avatar={comment.image}
          ></Comment>
        );
      })}
    </>
  );
};

export default Comments;
