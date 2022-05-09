import { HiArrowNarrowLeft } from 'react-icons/hi';
import React from 'react';

const ArticleCard = props => {
    return ( 
        <div className='p-7 rounded-lg' style={{boxShadow: "0px 0px 12px 1px #00000022"}}>
            <img src={props.image} alt="blog picture" className='rounded-md'/>
            <h2 className='text-md font-bold text-slate-800 mt-5 mb-3'>{props.title}</h2>
            <p className='text-xs text-slate-600 h-36 leading-loose overflow-hidden overflow-ellipsis'>{props.desc}</p>
            <a className='text-sm text-sky-500 mt-4 float-right hover:text-sky-600 transition-colors font-bold' href='#'>خوادن مقاله
            <HiArrowNarrowLeft className="mx-2" />
            </a>
        </div>
     );
}
 
export {ArticleCard};