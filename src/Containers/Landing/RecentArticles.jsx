import React, { Component } from "react";
import articlePic from "../../assets/images/blog.png";
import {ArticleCard} from "../../components/Blog/ArticleCard";
import { Title } from '../../components/common/Title';


class RecentArticles extends Component {
  state = {
    articles: [
      {
        title: "لورم ایپسوم متن ساخت",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
        image: articlePic,
      },
      {
        title: "لورم ایپسوم متن ساخت",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
        image: articlePic,
      },
      {
        title: "لورم ایپسوم متن ساخت",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
        image: articlePic,
      },
      {
        title: "لورم ایپسوم متن ساخت",
        desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت",
        image: articlePic,
      },
    ],
  };
  render() {
      const {articles} = this.state
    return (
      <section className="max-w-7xl mx-auto my-5">
          <Title text="آخرین مقالات"></Title>
        <div className="px-5 mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((article, index) => {
                return(
                    <ArticleCard key={index} image={article.image} desc={article.desc} title={article.title}></ArticleCard>
                )
            })}
        </div>
      </section>
    );
  }
}

export default RecentArticles;
