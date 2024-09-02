"use client";
import { useState } from "react";
import AddNewBlog from "../add-new-blog/index";
import GetAllBlogs from "../get-all-blogs/index";

const BlogOverView = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false); // New state to trigger reload

  // Initialize blog form data
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    description: "",
  });

  // Handle form submission
  const handleBlogData = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiResponse = await fetch("/api/add-blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogFormData),
      });

      const res = await apiResponse.json();
      console.log(res);

      if (apiResponse.ok) {
        setBlogFormData({
          title: "",
          description: "",
        });
        setOpenDialog(false);
        setReload(!reload);
      } else {
        console.error("Failed to submit the blog:", res.message);
      }
    } catch (error) {
      console.error("Error submitting the blog:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-tr from-purple-500 to-blue-600">
      <AddNewBlog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        loading={loading}
        setLoading={setLoading}
        blogFormData={blogFormData}
        setBlogFormData={setBlogFormData}
        handleBlogData={handleBlogData}
      />
      <div>
        <GetAllBlogs reload={reload} />
      </div>
    </div>
  );
};

export default BlogOverView;
