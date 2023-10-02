import React, { useState, useEffect } from "react";
import PageContainer from "../../components/common/PageContainer";
import CourseCard from "../../components/Courses/CourseCard";
import { motion } from "framer-motion";
import data from "../../core/services/api/courses.api";
import { GetAllCoursesData } from "../../core/services/api/course/getAllCourses.api";
import { paginate } from "../../core/utils/paginate";
import ReactLoading from "react-loading";
import Pagination from "../../components/common/Pagination";

const Courses = () => {
  const { CoursesData } = data;
  const [items, setItems] = useState([
    { text: "محبوب ترین ها", url: "#" },
    { text: "جدیدترین ها", url: "#" },
  ]);

  const [allCoursesData, setAllCoursesData] = useState([]);
  const [loadingForCourses, setLoadingForCourses] = useState(false);
  const [pageSize] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

  const getAllCourses = async () => {
    const result = await GetAllCoursesData();
    setAllCoursesData(result);
    setLoadingForCourses(true);
  };
  useEffect(() => {
    getAllCourses();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedCourses = paginate(allCoursesData, currentPage, pageSize);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-16"
    >
      <PageContainer items={items} title="دوره های آموزشی">
        {loadingForCourses ? (
          <>
            {paginatedCourses.map((item) => (
              <CourseCard
                key={item[1].id}
                image={item[1].course.image}
                id={item[1].id}
                desc={item[1].description}
                title={item[1].course.courseName}
                price={item[1].course.cost}
                tutor={item[1].teacher.fullName}
              ></CourseCard>
            ))}

            <Pagination
              itemsCount={Object.keys(allCoursesData).length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </>
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

export default Courses;
