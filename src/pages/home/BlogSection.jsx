import { useEffect, useState } from "react";
import SectionHeader from "../../components/SectionHeader";
import axios from "axios";
import BlogCard from "../../components/card/BlogCard";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/data/blogData.json").then((res) => setBlogs(res.data));
  }, []);
  return (
    <section>
      <SectionHeader title={"blog"} />
      <div className="grid grid-cols-2 gap-6 mt-10 px-10">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
