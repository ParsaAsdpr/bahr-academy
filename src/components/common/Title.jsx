import React from 'react';

const Title = props => {
    return ( 
        <h1 className={`px-5 text-md sm:text-lg md:text-xl text-slate-800 font-bold ${props.cName}`}>{props.text}</h1>
     );
}
 
export default Title;