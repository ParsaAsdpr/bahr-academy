import React from 'react';

const Category = props => {
    return ( 
        <div className='flex flex-col justify-center cursor-pointer py-8 hover:scale-105 transition-all rounded-lg bg-slate-100 shadow-lg shadow-slate-200'>
            <img src={props.img} alt={props.title} className="w-20 mx-auto"/>
            <p className='text-stone-800 text-xs text-center mt-8'>{props.title}</p>
        </div>
     );
}
 
export default Category;