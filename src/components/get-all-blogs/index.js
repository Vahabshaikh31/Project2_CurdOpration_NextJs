import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import DeleteBlog from "../delete-blog";

const fetchData = async () => {
  try {
    const response = await fetch("/api/get-blog", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const GetAllBlogs = ({ reload }) => {
  // Accept reload prop
  const [blogs, setBlogs] = useState([]);

  const loadBlogs = async () => {
    const data = await fetchData();

    if (data && data.success) {
      setBlogs(data.blogs);
    } else {
      console.error("Failed to fetch blogs");
    }
  };

  useEffect(() => {
    loadBlogs();
  }, [reload]);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        All Blogs
      </h1>
      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs available</p>
      ) : (
        <ul className="space-y-6 max-w-4xl mx-auto">
          {blogs.map((blog) => (
            <li
              key={blog._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.description}</p>
              <div className="flex gap-4">
                <DeleteBlog id={blog._id} onDeleteSuccess={loadBlogs} />
                <Button>Update</Button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GetAllBlogs;
