import React from 'react';

const Attachment = props => {
    return ( 
        <figure className='mx-auto my-5'>
            <div className='overflow-hidden rounded-md w-full max-h-96'></div>
            <img src={props.image} alt={props.alt} />
            <figcaption className='text-2xs md:text-xs text-stone-500 text-center mt-2'>{props.caption}</figcaption>
        </figure>
     );
}
 
export default Attachment;