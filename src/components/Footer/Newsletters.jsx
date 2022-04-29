import React from 'react';
import PrimaryButton from '../common/PrimaryButton';
import { NewsletterText } from './textbox';

const Newsletter = props => {
    return ( 
        <form className={`flex flex-wrap whitespace-nowrap justify-center ml-10 ${props.cName}`}>
            <h3 className='text-xl font-bold text-white w-full text-right mb-9'>عضویت در خبرنامه</h3>
            <NewsletterText placeholder='نام شما'></NewsletterText>
            <NewsletterText placeholder='پست الکترونیک شما'></NewsletterText>
            <PrimaryButton text="عضویت در خبرنامه" url="#"></PrimaryButton>
        </form>
     );
}
 
export {Newsletter};