import React from 'react';
import logopic from '../../assets/images/logo.png'

const FooterLogo = props => {
    return ( 
        <div className={`h-full w-full flex justify-center flex-col ${props.cName}`}>
            <img src={logopic} alt="" className='w-1/5 lg:w-4/5 mx-auto' />
            <h4 className='text-xl text-white w-full text-center font-bold mt-5'>آکادمی بحر</h4>
        </div>
     );
}
 
export default FooterLogo;