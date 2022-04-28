import React from 'react';

const PrimaryButton = props => {
    return ( 
        <a href={props.url} className='bg-indigo-300 text-white md:text-xl sm:text-md text-sm md:px-8 md:py-3 sm:px-6 px-4 py-2 rounded-md hover:bg-indigo-400 transition-all'>{props.text}</a>
     );
}
 
export default PrimaryButton;