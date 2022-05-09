import { FiLink } from 'react-icons/fi';
import React from 'react';

const LinkR = props => {
    return ( 
        <a href={props.url} className="text-blue-500 text-xs md:text-sm cursor-pointer w-full py-2 block hover:underline">
            <FiLink className="ml-3" />
            {props.text}
        </a>
     );
}
 
export default LinkR;