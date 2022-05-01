import React from 'react';

const Title = props => {
    return ( 
        <h1 className={`text-xl text-slate-800 font-bold p-3 md:p-7 ${props.cName}`}>{props.text}</h1>
     );
}
 
export {Title};