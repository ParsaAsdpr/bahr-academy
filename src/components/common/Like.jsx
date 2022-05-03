import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Like = props => {
    return ( 
        <div className={`flex flex-row gap-1 items-center cursor-pointer ${props.liked ? "text-green-500" : "text-stone-800" }`}>
            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
            <span className='text-xs'>{props.count}</span>
        </div>
     );
}
 
export {Like};