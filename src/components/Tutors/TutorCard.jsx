import React from 'react';

const TutorCard = props => {
    return ( 
        <div className='relative'>
            <div className='rounded-full p-2 absolute left-1/2 -translate-x-1/2 -top-1/4 w-3/12 bg-white' style={{boxShadow: "0 0 8px 1px #00000022"}}>
                <img src={props.avatar} alt="" className='rounded-full w-full'/>
            </div>
            <div className='px-6 py-7 rounded-lg flex flex-col justify-center' style={{boxShadow: "0 0 15px 1px #00000022"}}>
                <h3 className='text-lg font-bold mt-2 text-center py-3'>{props.name}</h3>
                <p className='text-sm text-slate-500'>{props.about}</p>
            </div>
        </div>
     );
}
 
export default TutorCard;