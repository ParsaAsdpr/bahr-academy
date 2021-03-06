import React from 'react';
import { Link } from 'react-router-dom';

const PrimaryButton = props => {
    return ( 
        <Link to={props.url} className='px-6 bg-blue-500 w-full text-center text-white md:text-md sm:text-sm text-xs md:py-4
         py-3 rounded-md hover:bg-blue-600 transition-all' style={props.style}>{props.text}</Link>
     );
}
 
export default PrimaryButton;