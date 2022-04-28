import React from 'react';

const NewsletterText = props => {
    return ( 
        <input type="text" className='py-4 px-5 w-full text-sm border rounded-md bg-white mb-3' placeholder={props.placeholder} style={props.style}></input>
     );
}
 
export {NewsletterText};