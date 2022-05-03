import React, { Component } from "react";
import javascript from "../../assets/images/javascript.png";
import Profile from "../../components/Blog/Profile";
import { Like } from "../../components/common/Like";
import { Tag } from "../../components/common/Tag";
import { Title } from "../../components/common/Title";
import { Dislike } from "../../components/common/Dislike";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Attachment from "../../components/Blog/Attachment";
import Paragraph from "../../components/Blog/Paragraph";
import { Comment } from "../../components/common/Comment";
import LinkR from "../../components/common/Link";
import Share from "../../components/Blog/Share";

class Article extends Component {
  state = {
    article: {
      tags: ["برنامه نویسی", "جاوااسکریپت", "طراحی سایت", "javascript", "js"],
    },
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
  };
  render() {
    const { article, comments, links } = this.state;
    return (
      <section className="max-w-7xl mx-auto p-0 md:p-7 overflow-hidden">
        <div className="md:grid md:grid-cols-3 gap-x-8">
          <div className="grid grid-cols-1 gap-5 col-span-2">
            <div
              className="p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <div className="w-full overflow-hidden max-h-96 rounded-md">
                <img
                  className="w-full object-cover"
                  src={javascript}
                  alt="cover"
                />
              </div>

              <div className="my-6">
                <h5 className="text-md text-stone-700">برچسب ها</h5>
                <div className="mt-3">
                  {article.tags.map((tag, index) => {
                    return <Tag text={tag} key={index}></Tag>;
                  })}
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col gap-y-4 md:flex-row justify-between items-center py-4">
                  <Profile
                    name="سالاره نیلی"
                    avatar="https://data.whicdn.com/images/336211867/original.jpg"
                  ></Profile>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-6">
                      <Dislike count="0" dislike={false}></Dislike>
                      <Like count="0" liked={false}></Like>
                    </div>
                    <div className="flex flex-row gap-2 text-xs text-stone-500">
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                      1203
                    </div>
                  </div>
                </div>

                <div className="my-2">
                  <div className="pb-3 md:pb-6">
                    <Title text="جاوااسکریپت چیست؟"></Title>
                  </div>
                  <Paragraph>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی
                    <br />
                    <br />
                    مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                    شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                    خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می
                    توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                    شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای
                    <br />
                    <br />
                    <br />
                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
                    مورد استفاده قرار گیرد.
                  </Paragraph>
                  <Attachment
                    image={javascript}
                    alt="جاوا اسکریپت چیست؟"
                    caption="تصویر جاوااسکریپت"
                  ></Attachment>
                  <Paragraph>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی
                    <br />
                    <br />
                    مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
                    باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده
                    شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
                    خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می
                    توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
                    شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی
                    دستاوردهای
                    <br />
                    <br />
                    <br />
                    اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا
                    مورد استفاده قرار گیرد.
                  </Paragraph>
                </div>
              </div>
            </div>
            <div
              className="p-7 rounded-lg"
              style={{ boxShadow: "0 0 15px 1px #00000022" }}
            >
              <div className="mb-5">
                <Title text="نظرات"></Title>
              </div>

              <div className="w-full">
                <textarea
                  className="border w-full h-36 p-4 text-xs text-stone-600 border-stone-400 rounded-md"
                  placeholder="نظر خود را بنویسید"
                  style={{ resize: "none" }}
                ></textarea>
                <button className="py-3 bg-indigo-400 text-white w-full text-center rounded-md text-sm hover:bg-indigo-500 transition-colors">
                  ثبت نظر
                </button>
              </div>
              {comments.map((comment, index) => {
                return (
                  <Comment
                    key={index}
                    name={comment.name}
                    text={comment.text}
                    avatar={comment.image}
                  ></Comment>
                );
              })}
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
  }
}

export default Article;
