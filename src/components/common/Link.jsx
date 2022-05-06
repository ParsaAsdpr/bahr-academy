import { FiLink } from 'react-icons/fi';
import React from 'react';

const LinkR = props => {
    return ( 
        <a href={props.url} className="text-blue-500 text-2xs md:text-xs cursor-pointer w-full py-2 flex flex-row gap-2 hover:underline">
            <FiLink className="text-xl" />
            {props.text}
        </a>
     );
}
 
export default LinkR;