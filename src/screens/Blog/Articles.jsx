import React, { useEffect, useState } from "react";
import { ArticleCard } from "../../components/Blog/ArticleCard";
import PageContainer from "../../components/common/PageContainer";
import { motion } from "framer-motion";
import axios from "axios";
import blog from "../../assets/images/blog.png";
import ReactLoading from "react-loading";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);
  const [items, setItems] = useState([
    { text: "محبوب ترین ها", url: "#" },
    { text: "جدیدترین ها", url: "#" },
  ]);

  const getData = async () => {
    try {
      await axios.get("https://jsonplaceholder.ir/posts").then((res) => {
        setArticles(res.data); // ***write catch function to catch error
      });
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const [noOfElements, setnoOfElements] = useState(8);

  const sliceArray = articles.slice(0, noOfElements);

  const loadMore = () => {
    setnoOfElements(noOfElements + 8);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PageContainer items={items} title="دوره های آموزشی">
        {loading ? (
          sliceArray.map((item, index) => {
            return (
              <ArticleCard
                title={item.title}
                desc={item.body}
                image={blog}
                key={index}
                id={item.id}
              ></ArticleCard>
            );
          })
        ) : (
          <ReactLoading type="spin" height="100px" width="100px" color="#6366f1" className="col-span-4 mx-auto my-20"></ReactLoading>
        )}
        <button
          onClick={() => loadMore()}
          className="text-stone-600 border-stone-500 col-span-4 border-2 rounded-md py-4 hover:text-white hover:bg-stone-500 transition"
        >
          بیشتر...
        </button>
      </PageContainer>
    </motion.div>
  );
};

export default Articles;
