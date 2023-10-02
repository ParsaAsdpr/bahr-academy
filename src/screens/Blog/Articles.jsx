import React, { useEffect, useState } from "react";
import ArticleCard from "../../components/Blog/ArticleCard";
import PageContainer from "../../components/common/PageContainer";
import { motion } from "framer-motion";
import ReactLoading from "react-loading";
import { GetAllBlogsData } from "../../core/services/api/blog/getAllBlogs.api";
import { paginate } from "../../core/utils/paginate";
import Pagination from "../../components/common/Pagination";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const [items, setItems] = useState([
    { text: "محبوب ترین ها", url: "#" },
    { text: "جدیدترین ها", url: "#" },
  ]);

  const [allBlogsData, setAllBlogsData] = useState([]);
  const [loadingForBlogs, setLoadingForBlogs] = useState(false);
  const [pageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const GetAllBlogs = async () => {
    const result = await GetAllBlogsData();
    setAllBlogsData(result);
    setLoadingForBlogs(true);
  };
  useEffect(() => {
    GetAllBlogs();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedBlogs = paginate(allBlogsData, currentPage, pageSize);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-16"
    >
      <PageContainer items={items} title="مقاله ها" >
        {loadingForBlogs ? (
          paginatedBlogs.map((item, index) => {
            return (
              <>
                <ArticleCard
                  title={item[1].title}
                  desc={item[1].body}
                  image={item[1].image}
                  key={index}
                  id={item[1]._id}
                ></ArticleCard>

                <Pagination
                  itemsCount={Object.keys(allBlogsData).length}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
              </>
            );
          })
        ) : (
          <ReactLoading
            type="spin"
            height="100px"
            width="100px"
            color="#6366f1"
            className="col-span-4 mx-auto my-20"
          ></ReactLoading>
        )}
      </PageContainer>
    </motion.div>
  );
};

export default Articles;
