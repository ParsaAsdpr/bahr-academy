import React from 'react';
import {BsHandThumbsDown, BsHandThumbsDownFill} from "react-icons/bs"

const Dislike = props => {
    return ( 
        <div className='flex flex-row gap-1 items-center cursor-pointer text-red-500'>
            {props.disliked ? <BsHandThumbsDownFill /> : <BsHandThumbsDown />}
            <span className='text-xs'>{props.count}</span>
        </div>
     );
}
 
export default Dislike;