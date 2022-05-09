import React, {useState} from 'react';
import web from '../../../assets/images/Web.svg'
import robotic from '../../../assets/images/Robotic.svg'
import security from '../../../assets/images/Security.svg'
import ai from '../../../assets/images/AI.svg'
import Category from './Category';
import Title from '../../common/Title';

const Categories = props => {
    const [categories, setCategories] = useState([
        {title: "طراحی وبسایت", img: web},
        {title: "رباتیک", img: robotic},
        {title: "امنیت شبکه", img: security},
        {title: "هوش مصنوعی", img: ai}
    ]);
    return ( 
        <section className='max-w-7xl mx-auto my-12'>
            <div className='my-7'>
            <Title text="دسته بندی ها"></Title>
            </div>
            <div className='grid grid-cols-4 gap-10'>
            {/* <div className='flex flex-row gap-x-10 justify-center'> */}
                {categories.map((category, index) => (
                    <Category title={category.title} img={category.img} key={index}></Category>
                ))}
            </div>
        </section>
     );
}
 
export default Categories;