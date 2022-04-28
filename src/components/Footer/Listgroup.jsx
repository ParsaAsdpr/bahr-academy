import React from 'react';

const FooterListGroup = props => {
    return ( 
        <ul className='text-lg text-white cursor-pointer mx-10 leading-10 float-right'>
            {props.title}
            {props.children}
        </ul>
     );
}
 
export default FooterListGroup;