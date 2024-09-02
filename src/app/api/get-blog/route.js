import connectToDB from "@/database";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const response = await Blog.find({});
    return NextResponse.json({ success: true, blogs: response });
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json({
      success: false,
      message: error.message,
    });
  }
}
