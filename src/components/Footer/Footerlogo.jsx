import React from 'react';
import logopic from '../../assets/images/logo.png'

const FooterLogo = () => {
    return ( 
        <div className='h-full w-1/12 absolute left-0'>
            <img src={logopic} alt="" className='w-full' />
            <h4 className='text-xl text-white w-full text-center font-bold mt-5'>آکادمی بحر</h4>
        </div>
     );
}
 
export {FooterLogo};