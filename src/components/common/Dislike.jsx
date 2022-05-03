import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Dislike = props => {
    return ( 
        <div className={`flex flex-row gap-1 items-center cursor-pointer ${props.disliked ? "text-red-500" : "text-stone-800"   }`}>
            <FontAwesomeIcon icon={faThumbsDown}></FontAwesomeIcon>
            <span className='text-xs'>{props.count}</span>
        </div>
     );
}
 
export {Dislike};