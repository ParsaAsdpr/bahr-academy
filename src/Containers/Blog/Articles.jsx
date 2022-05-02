import React, { Component } from 'react';
import { ArticleCard } from '../../components/Blog/ArticleCard';
import PageContainer from '../../components/common/PageContainer';
import blog from "../../assets/images/blog.png"

class Articles extends Component {
    state = { 
        items: [{text: "محبوب ترین ها", url:"#"},{text: "جدیدترین ها", url: "#"},],
        // make an array from 1 to 50
        array: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]
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