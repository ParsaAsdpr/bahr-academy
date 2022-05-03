import React, { Component } from 'react';
import { ArticleCard } from '../../components/Blog/ArticleCard';
import PageContainer from '../../components/common/PageContainer';
import blog from "../../assets/images/blog.png"

class Articles extends Component {
    state = { 
        items: [{text: "محبوب ترین ها", url:"#"},{text: "جدیدترین ها", url: "#"},],
        // make an array from 1 to 20
        array: Array.from(Array(20).keys()).map(i => i + 1),
     } 
    render() { 
        const { items, array } = this.state;
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
}
 
export default Articles;