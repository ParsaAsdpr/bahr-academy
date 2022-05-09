import React from 'react';

const Comment = props => {
    return ( 
        <div className='my-5 flex flex-row gap-4'>
            <div className='overflow-hidden rounded-full w-12 h-12'>
                <img src={props.avatar} alt="" className='w-full'/>
            </div>
            <div className='rounded-2xl rounded-tr-none border border-stone-300 mt-6 p-5' style={{minWidth: "150px"}}>
                <h4 className='text-xs md:text-sm text-stone-800'>{props.name}</h4>
                <p className='text-2xs md:text-xs text-stone-600 leading-loose py-3'>{props.text}</p>
            </div>
        </div>
     );
}
 
export default Comment;