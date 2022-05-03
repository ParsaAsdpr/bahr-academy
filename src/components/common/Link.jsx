import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const LinkR = props => {
    return ( 
        <a href={props.url} className="text-blue-500 text-xs md:text-sm cursor-pointer w-full py-2 block hover:underline">
            <FontAwesomeIcon icon={faLink} className="ml-3"></FontAwesomeIcon>
            {props.text}
        </a>
     );
}
 
export default LinkR;