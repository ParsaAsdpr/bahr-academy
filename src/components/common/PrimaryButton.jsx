import React from 'react';

const PrimaryButton = props => {
    return ( 
        <a href={props.url} className='bg-blue-500 w-full text-center text-white md:text-md sm:text-sm text-xs md:py-4
         py-3 rounded-md hover:bg-blue-600 transition-all' style={props.style}>{props.text}</a>
     );
}
 
export default PrimaryButton;