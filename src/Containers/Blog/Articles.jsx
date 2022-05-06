import React, { useState } from 'react';
import { ArticleCard } from '../../components/Blog/ArticleCard';
import PageContainer from '../../components/common/PageContainer';
import blog from "../../assets/images/blog.png"

const Articles = () => {
    const [items, setItems] = useState([
        {text: "محبوب ترین ها", url:"#"},{text: "جدیدترین ها", url: "#"}
    ])
    const [array, setArray] = useState(Array.from(Array(20).keys()).map(i => i + 1))

        return (
            <PageContainer items={items} title="دوره های آموزشی">
                {array.map((item, index) => {
                    return(
                        <ArticleCard title="مسشیرپ منسی" desc="شیسر سشیر شسی رش سیرشسیرشسیر شسی رشسی رش سیر شسیر شسی رش سیر شسیر شس یرش سیر شسری شسیر ش یرشسیرشسریشسیر" image={blog} key={item}></ArticleCard>
                    )
                })}
            </PageContainer>
        );
    }
 
export default Articles;