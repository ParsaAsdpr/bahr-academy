import React from 'react';
import notfoundpic from "../../assets/images/404.png";
import PrimaryButton from '../../components/common/PrimaryButton';
import {motion} from "framer-motion";

const NotFound = () => {
    return ( 
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className='w-full flex whitespace-nowrap flex-wrap justify-center'>
            <div className='flex justify-center items-center mt-20'>
                <img src={notfoundpic}/>
            </div>
                        <h1 className='md:text-5xl sm:text-4xl text-2xl font-bold text-gray-800 text-center w-full'>متاسفیم</h1>
                        <p className='sm:text-lg text-sm text-slate-500 text-center w-full my-8 px-3 h-auto inline'>مثل اینکه صفحه مورد نظر شما یافت نشد</p>
                        <PrimaryButton url="#" text="بازگشت به صفحه اصلی"></PrimaryButton>
        </motion.div>

     );
}
 
export default NotFound;