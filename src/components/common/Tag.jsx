import React from 'react';

const Tag = props => {
    return ( 
        <div className='bg-stone-100 text-stone-900 shadow-md text-xs px-4 py-1 rounded-full 
        hover:bg-stone-600 hover:text-white transition-colors cursor-pointer text-center float-right m-1'>
            {props.text}
        </div>
     );
}
 
export default Tag;