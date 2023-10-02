import React, { useState, useEffect } from "react";
import javascript from "../../assets/images/javascript.png";
import Title from "../../components/common/Title";
import Attachment from "../../components/common/Attachment";
import LinkR from "../../components/common/Link";
import Share from "../../components/common/Share";
import MainArticle from "../../components/Blog/MainA";
import Comments from "../../components/common/Comments";
import { motion } from "framer-motion";
import ACBox from "../../components/common/ACbox";
import GetNewsById from "../../core/services/api/blog/getNewsById.api";
import {GetAllBlogsData} from "../../core/services/api/blog/getAllBlogs.api";
import {useParams} from "react-router-dom";


const Article = (props) => {
  const tags = ["برنامه نویسی", "جاوااسکریپت", "طراحی سایت", "javascript", "js"]
  const comments = [
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
  ]
  const links =  [
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
  ]

  const {id} = useParams();

  const [newsByIdData, setNewsByIdData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allBlogData, setAllBlogData] = useState([]);

  const newsById = async () => {
      const result = await GetNewsById(id);
      setNewsByIdData(result);
      setLoading(true);
  };
  const getAllBlogs = async () => {
      const result = await GetAllBlogsData();
      setAllBlogData(result);
  };

  useEffect(() => {
      newsById();
      getAllBlogs();
  }, []);

  return (
    <motion.section className="max-w-7xl mx-auto p-0 md:p-7 overflow-hidden mt-16" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <div className="md:grid md:grid-cols-3 gap-x-8">
        <div className="grid grid-cols-1 gap-5 col-span-2">
          <ACBox>

            <MainArticle
              title={newsById.title}
              author="سالار نیلی"
              avatar="https://data.whicdn.com/images/336211867/original.jpg"
              likes="0"
              dislikes="0"
              tags={tags}
              desc={props.newsById.text}
              image={newsById.image}
              >
              <Attachment
                image={javascript}
                alt="جاوا اسکریپت چیست؟"
                caption="تصویر جاوااسکریپت"
                ></Attachment>
            </MainArticle>
                </ACBox>
          <ACBox>

            <Comments comments={comments}></Comments>
          </ACBox>
        </div>
        <div className="grid grid-cols-1 mt-5 md:mt-0 auto-rows-min gap-5">
          <ACBox>

            <div className="pb-3">
              <Title text="لینک های مرتبط"></Title>
            </div>
            {links.map((link, index) => {
              return (
                <LinkR key={index} url={link.url} text={link.text}></LinkR>
                );
              })}
              </ACBox>
          <ACBox>
            <Share></Share>
          </ACBox>
        </div>
      </div>
    </motion.section>
  );
};

export default Article;
