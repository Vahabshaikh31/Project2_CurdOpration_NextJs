import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  description: String,
});

// Avoid recompiling the model if it already exists
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
