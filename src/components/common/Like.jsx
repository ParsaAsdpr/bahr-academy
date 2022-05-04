import React from 'react';
import {BsHandThumbsUp, BsHandThumbsUpFill} from "react-icons/bs"

const Like = props => {
    return ( 
        <div className='flex flex-row gap-1 items-center cursor-pointer text-green-500'>
            {props.liked ? <BsHandThumbsUpFill /> : <BsHandThumbsUp />}
            <span className='text-xs'>{props.count}</span>
        </div>
     );
}
 
export {Like};