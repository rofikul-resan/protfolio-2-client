import { useEffect, useState } from "react";
import SectionHeader from "../../../components/SectionHeader";
import axios from "axios";
import BlogCard from "../../../components/card/BlogCard";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("/data/blogData.json").then((res) => setBlogs(res.data));
  }, []);
  return (
    <section className="px-10">
      <SectionHeader
        title={"blog"}
        headline={"last Publish"}
        detail={
          "Explore my latest blogs, where I share insights, experiences, and solutions to real-world challenges in the tech industry. Each blog post is carefully crafted to provide valuable knowledge, covering topics like modern web development, emerging technologies, and efficient coding practices. These articles reflect my passion for learning, teaching, and staying updated in the ever-evolving world of technology."
        }
      />
      <div className="grid grid-cols-2 gap-6 mt-10 ">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
