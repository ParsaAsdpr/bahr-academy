import React from 'react';

const Advantage = props => {
    return ( 
        <div className='flex justify-center'>
            <div className='h-full'>
                <div className='p-2 w-10 rounded-full bg-indigo-400 mt-3'>
                <img src={props.image} alt="" className='w-full'/>
                </div>
            </div>
            <div className='h-full'>
                <h2 className='text-md sm:text-lg text-slate-800 p-3 font-bold'>{props.title}</h2>
                <p className='text-xs sm:text-sm text-slate-500 px-3 leading-loose'>{props.desc}</p>
            </div>
        </div>
     );
}
 
export default Advantage;