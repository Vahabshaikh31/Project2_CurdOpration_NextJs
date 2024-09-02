import connectToDB from "@/database";
import Blog from "@/models/blog";
import Joi from "joi"; // Make sure you import Joi
import { NextResponse } from "next/server";

const BlogSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
});

export async function POST(req) {
  try {
    await connectToDB();
    const { title, description } = await req.json();

    const { error } = BlogSchema.validate({
      title,
      description,
    });

    if (error) {
      return NextResponse.json({
        success: false,
        message: error.details[0].message,
      });
    }

    const newlyCreatedBlog = await Blog.create({ title, description });

    console.log(newlyCreatedBlog);
    return NextResponse.json({
      success: true,
      title: newlyCreatedBlog.title,
      description: newlyCreatedBlog.description,
    });
  } catch (error) {
    console.error("Error creating blog:", error.message);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
