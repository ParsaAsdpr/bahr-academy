import React, { useState } from 'react';
import Style from './AcadenyStats.module.css';
import tutor from '../../assets/images/teacher.svg'
import student from '../../assets/images/student.svg'
import certification from '../../assets/images/resume.svg'

const AcademyStats = props => {
    const [stats, setStats] = useState([
        {title: "مدرس مجرب", value: 176, icon: tutor},
        {title: "دانشجو", value: 21632, icon: student},
        {title: "دوره فعال", value: 76, icon: certification},
    ]);
    return ( 
        <section className={`w-full relative ${Style.statsBackground}`}>
            <div className={Style.mask}>
                <div className='max-w-7xl mx-auto flex justify-around py-3 sm:py-5 md:py-12'>
                    {stats.map((stat, index) => (
                        <div className='flex flex-col gap-1 sm:gap-3 md:gap-5' key={index}>
                            <img src={stat.icon} alt="" className='w-16 sm:w-28 md:w-36'/>
                            <h3 className='text-white text-center text-sm sm:text-md md:text-2xl'>{stat.title}</h3>
                            <p className='text-white text-center text-sm sm:text-md md:text-2xl'>{stat.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
     );
}
 
export default AcademyStats;