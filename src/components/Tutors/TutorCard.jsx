import React from 'react';

const TutorCard = props => {
    return ( 
        <div className='flex flex-col place-items-center'>
            <div className='rounded-full p-2 w-4/12 bg-white relative top-10' style={{boxShadow: "0 0 8px 1px #00000022"}}>
                <img src={props.avatar} alt="" className='rounded-full w-full'/>
            </div>
            <div className='px-6 py-7 rounded-lg flex flex-col justify-center' style={{boxShadow: "0 0 15px 1px #00000022"}}>
                <h3 className='text-lg font-bold mt-2 text-center py-3'>{props.name}</h3>
                <p className='text-xs text-slate-500 leading-loose indent-3'>{props.about}</p>
            </div>
        </div>
     );
}
 
export default TutorCard;