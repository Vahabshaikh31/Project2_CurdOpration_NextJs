import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST({ req }) {
  try {
    await connectToDB();
    const id = req;
    await Blog.deleteOne({ id });
    return NextResponse.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
