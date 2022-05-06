import React, { useState } from "react";
import javascript from "../../assets/images/javascript.png";
import { Title } from "../../components/common/Title";
import Attachment from "../../components/common/Attachment";
import LinkR from "../../components/common/Link";
import Share from "../../components/common/Share";
import MainArticle from "../../components/Blog/MainA";
import Comments from "../../components/common/Comments";

const Article = (props) => {
  const [article, setArticle] = useState({
    title: "جاوااسکریپت چیست؟",
    desc: " لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی \n \n مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای \n \n \n اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
    tags: ["برنامه نویسی", "جاوااسکریپت", "طراحی سایت", "javascript", "js"],
    comments: [
      {
        name: "پارسا",
        text: "👌",
        image:
          "https://i.pinimg.com/474x/dc/33/26/dc33269f24cbc2cf0fe3ecc27024e436.jpg",
      },
      {
        name: "ممد",
        text: "عالی بود",
        image: "https://pbs.twimg.com/media/FCQddC_WYAEzxfA.jpg:large",
      },
      {
        name: "امین",
        text: ":)",
        image:
          "https://static.wikia.nocookie.net/af527d64-10e5-47dc-84c9-3691fa1cb744/scale-to-width/370",
      },
    ],
    links: [
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
      {
        url: "#",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاد",
      },
    ],
  });

  const { tags, comments, links, title, desc } = article;

  return (
    <section className="max-w-7xl mx-auto p-0 md:p-7 overflow-hidden">
      <div className="md:grid md:grid-cols-3 gap-x-8">
        <div className="grid grid-cols-1 gap-5 col-span-2">
          <div
            className="p-7 rounded-lg"
            style={{ boxShadow: "0 0 15px 1px #00000022" }}
          >
            <MainArticle
              title={title}
              author="سالار نیلی"
              avatar="https://data.whicdn.com/images/336211867/original.jpg"
              likes="0"
              tags={tags}
              dislikes="0"
              desc={desc}
            >
              <Attachment
                image={javascript}
                alt="جاوا اسکریپت چیست؟"
                caption="تصویر جاوااسکریپت"
              ></Attachment>
            </MainArticle>
          </div>
          <div
            className="p-7 rounded-lg"
            style={{ boxShadow: "0 0 15px 1px #00000022" }}
          >
            <Comments comments={comments}></Comments>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 md:mt-0 auto-rows-min gap-5">
          <div
            className="p-7 rounded-lg"
            style={{ boxShadow: "0 0 15px 1px #00000022" }}
          >
            <div className="pb-3">
              <Title text="لینک های مرتبط"></Title>
            </div>
            {links.map((link, index) => {
              return (
                <LinkR key={index} url={link.url} text={link.text}></LinkR>
              );
            })}
          </div>

          <div
            className="px-16 py-7 md:p-7 rounded-lg"
            style={{ boxShadow: "0 0 15px 1px #00000022" }}
          >
            <Share></Share>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
